const github = require('@actions/github');
const core = require('@actions/core');

const context = github.context;
const repository = process.env.GITHUB_REPOSITORY;
const singleRepoName = repository.split('/').pop();
const githubHeadRef = process.env.GITHUB_HEAD_REF;

let branch = '';

if (githubHeadRef && githubHeadRef.length > 0) {
  if (githubHeadRef.indexOf('/') !== -1) {
    branch = githubHeadRef.split('/').pop();
  } else {
    branch = githubHeadRef;
  }
} else {
  branch = context.ref.split('/').pop();
}

const protectedBranches = [
  'dev',
  'prod',
  'qa',
  'stage',
  'master',
  'release',
  'develop',
  'main',
  'badges',
];

const buildDeployInfo = (branch) => {
  const deployInfo = {};

  if (protectedBranches.includes(branch)) {
    deployInfo['helmReleaseName'] = `${singleRepoName}`.toLocaleLowerCase();
    deployInfo['dockerTag'] = `tag-${context.sha}`;
    deployInfo['branch'] = branch.toLocaleLowerCase();
    deployInfo['frontendHostPrefix'] = 'web';
  } else {
    deployInfo['env'] = 'dev';
    deployInfo['helmReleaseName'] = `${singleRepoName}-${branch}`.toLowerCase();
    deployInfo['dockerTag'] = `${branch}_${context.sha}`;
    deployInfo['branch'] = branch.toLocaleLowerCase();
    deployInfo['frontendHostPrefix'] = `${branch}`.toLowerCase();
  }

  return deployInfo;
};

// debug outputs
core.setOutput('CONTEXT_REF', context.ref);
core.setOutput('DATA_GITHUB_HEAD_REF', process.env.GITHUB_HEAD_REF);

deployInfo = buildDeployInfo(branch);

core.setOutput(
  'RELEASE_DEV_ENV_VERSION',
  deployInfo['sprintReleaseDevEnvVersion']
);
core.setOutput('RELEASE_BRANCH', deployInfo['branch']);
core.setOutput('DOCKER_TAG', deployInfo['dockerTag']);
core.setOutput('HELM_RELEASE_NAME', deployInfo['helmReleaseName']);
core.setOutput('FE_HOST_PREFIX', deployInfo['frontendHostPrefix']);
core.setOutput('FE_REPOSITORY', repository);
