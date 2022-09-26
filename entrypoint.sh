#!/bin/sh
# set -e

cp env_config/ecosystem.config.js .
sed -i "s/OKTA_WIDGET_ORIGIN_VALUE/$FE_HOST/g" ecosystem.config.js
npm run start:production
