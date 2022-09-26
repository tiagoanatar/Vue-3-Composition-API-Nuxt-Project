#!/bin/bash - 

source .env

[[ -d env_config ]] || mkdir env_config

function create_file() {
cat > env_config/ecosystem.config.js << EOF
module.exports = {
	apps: [{
		name: 'aa-frontend-pwa',
		exec_mode: 'cluster',
		instances: '2',
		script: './.output/server/index.mjs',
		env: {
			"CONTENTFUL_ACCESS_TOKEN": "${CONTENTFUL_ACCESS_TOKEN}",
			"CONTENTFUL_SPACE_ID": "${CONTENTFUL_SPACE_ID}",
			"OKTA_CLIENT_ID": "${OKTA_CLIENT_ID}",
			"PURPOSE_ENDPOINT": "${PURPOSE_ENDPOINT}",
			"CONTENTFUL_ENDPOINT": "${CONTENTFUL_ENDPOINT}",
			"OKTA_ORIGIN": "${OKTA_ORIGIN}",
			"OKTA_ISSUER": "${OKTA_ISSUER}",
			"GOOGLE_MAPS_API": "${GOOGLE_MAPS_API}"
		}
	}]
};
EOF
}

if [[ ! -f env_config/ecosystem.config.js ]]
then
  create_file
fi

docker build -t aa-frontend-pwa:pm2-dev --build-arg FE_HOST=localhost -f Dockerfile-dev .
docker run -d -p 3000:3000 aa-frontend-pwa:pm2-dev




