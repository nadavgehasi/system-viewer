build-dev:
	docker-compose -f docker-compose.dev.yml build

run-dev: build-dev
	docker-compose -f docker-compose.dev.yml up

build: 
	docker-compose build

run: build
	docker-compose up

