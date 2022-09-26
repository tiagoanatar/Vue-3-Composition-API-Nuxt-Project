const core = require('@actions/core');

const axios = require('axios').default;

const oktaApiToken = core.getInput('okta-api-token');
const host = core.getInput('host');

const repository = process.env.GITHUB_REPOSITORY;
const singleRepoName = repository.split('/').pop();

axios.defaults.headers.common['Authorization'] = `SSWS ${oktaApiToken}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const buildTrustedOriginBody = (protocol, host) => {
  return {
    name: `${protocol.toUpperCase()} ${host} CORS ${singleRepoName}`,
    origin: `${protocol.toLowerCase()}://${host}`,
    scopes: [
      {
        type: 'CORS',
      },
      {
        type: 'REDIRECT',
      },
    ],
  };
};

const createTrustedOrigin = (protocol, host) => {
  return axios
    .get(
      `https://advanceamericaconsumer.oktapreview.com/api/v1/trustedOrigins?filter=(name eq "${protocol.toUpperCase()} ${host} CORS ${singleRepoName}")`
    )
    .then((response) => {
      console.log(response);
      core.setOutput(
        'okta-response',
        `${protocol.toUpperCase()} ${host} CORS ${singleRepoName} - already exists in Okta`
      );
      if (response.data.length === 0) {
        return axios.post(
          'https://advanceamericaconsumer.oktapreview.com/api/v1/trustedOrigins',
          buildTrustedOriginBody(protocol, host)
        );
      }
    })
    .then((response) => {
      console.log(response);
      core.setOutput(
        'okta-response',
        `${protocol.toUpperCase()} ${host} CORS ${singleRepoName} updated`
      );
    })
    .catch((error) => {
      console.log(error);
      core.setOutput('okta-response', 'Error updating HTTPS CORS');
    });
};

createTrustedOrigin('http', host);
createTrustedOrigin('https', host);

//   https://developer.okta.com/docs/reference/api/trusted-origins/
