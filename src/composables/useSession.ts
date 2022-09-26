import { useCookie, useState } from '#app';
import { Tokens } from '@okta/okta-auth-js';
import { UserClaims } from '@okta/okta-auth-js';

export const useAuthClient = () => {
  const { $OktaAuth } = useNuxtApp();

  const env = useEnvironmentVariables();
  const REDIRECT_URI = `${env.variables.value.OKTA_ORIGIN}/login/callback`;

  const authClient = new $OktaAuth({
    issuer: env.variables.value.OKTA_ISSUER,
    clientId: env.variables.value.OKTA_CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'email', 'profile', 'address', 'phone', 'self'],
    cookies: {
      secure: true,
    },
    services: {
      syncStorage: true,
      autoRenew: true,
    },
  });

  const instantiateClient = (token: Tokens): void => {
    authClient.handleLoginRedirect(token);
    authClient.start();
  };

  const getUser = async (): Promise<UserClaims> => {
    const { getToken } = useJWT();
    const token = await getToken();
    const user = await authClient.getUser(token);

    return user;
  };

  return {
    authClient,
    getUser,
    instantiateClient,
  };
};

export const useJWT = () => {
  const { authClient } = useAuthClient();

  const getToken = async (): Promise<string> => {
    const tokenManager = authClient.tokenManager;
    const accessToken = await tokenManager.get('accessToken');

    return accessToken?.accessToken;
  };

  const refreshToken = (callback: unknown): void => {
    authClient.tokenManager
      .renew('accessToken')
      .then(() => {
        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch((error) => {
        const { handleError } = useError();

        handleError(error, 'applicant');
      });
  };

  return {
    getToken,
    refreshToken,
  };
};

export const useOkta = () => {
  // NOTE: Used to have the context of the current widget screen.
  const viewContext = useState('viewContext', () => '');

  // NOTE: Used to give the starting flow, login or register to the widget success callback.
  const signinFlowContext = useState('signinFlowContext', () => '');

  const updateViewContext = (context: string): void => {
    viewContext.value = context;
  };

  const updateSigninFlowContext = (context: string): void => {
    signinFlowContext.value = context;
  };

  return {
    signinFlowContext,
    updateSigninFlowContext,
    updateViewContext,
    viewContext,
  };
};

export const useSession = () => {
  const { authClient } = useAuthClient();

  const isLoggedIn = useCookie<boolean>('isUserLoggedIn');

  const logIn = (): void => {
    isLoggedIn.value = true;
  };

  const logOut = async (): Promise<void> => {
    const { deleteUser } = useUserData();

    try {
      // NOTE: Resets all cookies added by composables.
      deleteUser();
      isLoggedIn.value = false;

      // NOTE: Revokes client's token.
      await authClient.revokeAccessToken();

      // NOTE: Clears Third party cookies.
      authClient.tokenManager.clear();

      // NOTE: Ends Okta session.
      authClient.closeSession();

      // NOTE: Will redirect to the configured route on the Okta app.
      authClient.signOut();

      // NOTE: Removes extra cache from the local storage.
      localStorage.removeItem('okta-cache-storage');
    } catch (error) {
      const { handleError } = useError();

      handleError(error, 'okta');
    }
  };

  return {
    isLoggedIn,
    logIn,
    logOut,
  };
};
