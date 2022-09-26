FROM node:16.13.0-alpine

LABEL maintainer="jvinagr@teampurpose.com"
LABEL version="1.0"
LABEL description="aa-frontend-app \
docker image."

WORKDIR /app

ADD package.json /app

RUN npm i --silent

ADD . /app

RUN npm run build
