// Properties reference https://github.com/okta/okta-signin-widget/blob/master/packages/%40okta/i18n/src/properties/login.properties

interface Ii18nProperties {
  en: { [key: string]: string };
}

export enum ViewContext {
  Login = 'primary-auth',
  Register = 'registration',
  MfaVerify = 'mfa-verify',
}

export const i18nProperties: Ii18nProperties = {
  en: {
    // Login
    'primaryauth.title': 'Log In',
    'primaryauth.submit': 'Log In',
    'primaryauth.username.placeholder': 'Email Address',
    'primaryauth.password.placeholder': 'Password',
    needhelp: 'Log In Help',
    'registration.signup.label': 'Need an account?',
    'registration.signup.text': 'Apply now',

    // Register
    'registration.form.title': 'Apply Now',

    // Reset password
    'password.forgot.email.or.username.placeholder': 'Email address',
    'password.forgot.email.or.username.tooltip': 'Email address',

    // General errors
    'errors.E0000004': 'Log in failed. Please try again.',
    'errors.E0000047':
      'You have exceeded the maximum number of log-in attempts. Please try again after 24 hours.',

    // Field level errors
    'error.username.required': 'Please enter an email address',
  },
};
