<script setup lang="ts">
import { ViewContext, i18nProperties } from '@/constants/okta';
// eslint-disable-next-line sort-imports
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { EventContext } from '@okta/okta-signin-widget';
import { Routes } from '@/constants/pages';
import { Tokens } from '@okta/okta-auth-js';

const router = useRouter();
const { $OktaSignIn } = useNuxtApp();
const env = useEnvironmentVariables();
const REDIRECT_URI = `${env.variables.value.OKTA_ORIGIN}/login/callback`;
const scopes = ['openid', 'email', 'profile', 'address', 'phone', 'self'];
let registrationEmail = null;

const widgetConfig = {
  language: 'en',
  i18n: i18nProperties,
  registration: {
    // to delete first and last name from registration schema
    parseSchema: function (schema, successCallback) {
      try {
        delete schema.profileSchema.properties['firstName'];
        delete schema.profileSchema.properties['lastName'];
        schema.profileSchema.required = ['password'];
        successCallback(schema);
      } catch (error) {
        const { handleError } = useError();

        handleError(error, 'okta');
      }
    },
    preSubmit: (postData, successCallback) => {
      registrationEmail = postData?.email;

      successCallback(postData);
    },
  },
  features: {
    //NOTE: Enable self-service registration flow
    registration: true,

    //NOTE: Setting to false will remove the checkbox to save username
    rememberMe: true,

    //NOTE: Allow users to enroll in multiple optional factors before finishing the authentication flow.
    multiOptionalFactorEnroll: false,

    //NOTE: Will enable unlock in addition to forgotten password
    selfServiceUnlock: false,

    //NOTE: Enable SMS-based account recovery
    smsRecovery: true,

    //NOTE: Enable voice call-based account recovery
    callRecovery: false,

    /**
     * NOTE: Allow the control of the route by Okta`s widget,
     * this will help to show the register screen if their routes matches with ours.
     */
    router: true,

    //NOTE: To show/hide password
    showPasswordToggleOnSignInPage: true,
  },
  baseUrl: env.variables.value.OKTA_ISSUER.split('/oauth2')[0],
  clientId: env.variables.value.OKTA_CLIENT_ID,
  redirectUri: REDIRECT_URI,
  recoveryToken: null,

  useInteractionCodeFlow: false,
  issuer: env.variables.value.OKTA_ISSUER,
  oidc: {
    clientId: env.variables.value.OKTA_CLIENT_ID,
    issuer: env.variables.value.OKTA_ISSUER,
    scopes,
    pkce: true,
  },
  authParams: {
    issuer: env.variables.value.OKTA_ISSUER,
    scopes,
  },
};

const route = useRoute();
const { signinFlowContext, updateViewContext, updateSigninFlowContext } =
  useOkta();
const widget = ref();
let signInWidget = null;

const successCallback = async (token: Tokens) => {
  const { instantiateClient } = useAuthClient();
  const { logIn } = useSession();
  const { refreshToken } = useJWT();

  // NOTE: Initiates the auth library.
  instantiateClient(token);

  // NOTE: Login flow.
  if (signinFlowContext.value === ViewContext.Login) {
    logIn();
    router.push(Routes.Dashboard);
  }

  // NOTE: Register flow.
  if (signinFlowContext.value === ViewContext.Register) {
    const { post } = await useAxios();
    const { user } = useUserData();

    const body = {
      email: registrationEmail,
      zipcode: user.value.zipCode,
    };

    const refreshCallback = () => {
      logIn();
      router.push(Routes.PersonalInformation);
    };

    const headers = {
      Authorization: `Bearer ${token?.accessToken?.accessToken}`,
    };

    // NOTE: Register applicant to get putposeId in the jwt.
    post(
      'v1/signup-composite-ms/applicant',
      body,
      { context: 'applicant' },
      { headers }
    ).then(async () => {
      await refreshToken(refreshCallback);
    });
  }
};

onMounted(() => {
  try {
    // NOTE: Password recovery.
    const passwordRecoveryToken = route?.query?.token;

    widgetConfig.recoveryToken = passwordRecoveryToken;

    signInWidget = new $OktaSignIn(widgetConfig);

    signInWidget
      .showSignInToGetTokens({
        el: widget.value,
        scopes: widgetConfig.oidc.scopes,
      })
      .then(successCallback)
      .catch((error) => {
        const { handleError } = useError();

        handleError(error, 'okta');
      });

    // NOTE: Listen to any event related to the widget screen context.
    signInWidget.on('afterRender', (context: EventContext) => {
      // NOTE: Updates the app with the current widget screen.
      updateViewContext(context?.controller);

      const { user } = useUserData();

      /**
       * NOTE: Whenever the user doesn't have zip code and it is at login and hits Okta's
       * "Need an account? Apply now" CTA, register screen will flash for a second
       * and then redirected to zip code screen.
       */
      if (
        ViewContext.Register === context?.controller &&
        !user.value?.zipCode
      ) {
        return router.push(Routes.Zipcode);
      }

      // NOTE: Updates the starting sign in flow it can be either login or register.
      if (
        [ViewContext.Login, ViewContext.Register].includes(context?.controller)
      ) {
        updateSigninFlowContext(context?.controller);
      }

      if (context?.controller === ViewContext.MfaVerify) {
        if (document.getElementsByClassName('sms-request-button').length > 0) {
          let element: HTMLElement = document.getElementsByClassName(
            'sms-request-button'
          )[0] as HTMLElement;
          element.click();
        }
      }
    });
  } catch (error) {
    const { handleError } = useError();

    handleError(error, 'okta');
  }
});

onUnmounted(() => {
  try {
    signInWidget.off();
    signInWidget.remove();
  } catch (error) {
    const { handleError } = useError();

    handleError(error, 'okta');
  }
});
</script>

<template>
  <div ref="widget" aria-live="assertive"></div>
</template>
