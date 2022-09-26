.PHONY: dev prod

default: dev

build-dev:
	docker build -t aa-frontend-pwa:dev -f Dockerfile-dev .

build-pm2prod:
	docker build -t aa-frontend-pwa:production -f Dockerfile-prod .

build:
	docker build -t aa-frontend-pwa:node -f Dockerfile .
