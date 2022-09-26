export default (): { [key: string]: string } => {
  return {
    CONTENTFUL_ENDPOINT: process.env.CONTENTFUL_ENDPOINT,
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
    GTM_ID: process.env.GTM_ID,
    OKTA_CLIENT_ID: process.env.OKTA_CLIENT_ID,
    OKTA_ISSUER: process.env.OKTA_ISSUER,
    OKTA_ORIGIN: process.env.OKTA_ORIGIN,
    PLAID_LINK_TOKEN: process.env.PLAID_LINK_TOKEN,
    PURPOSE_ENDPOINT: process.env.PURPOSE_ENDPOINT,
  };
};
