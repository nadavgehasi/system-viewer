build-dev:
	docker-compose -f docker-compose.yml.dev build

run-dev: build-dev
	docker-compose -f docker-compose.yml.dev up

build: 
	docker-compose build

run: build
	docker-compose up
