build-frontend:
	cd frontend && npm run build

build: build-frontend
	docker-compose build

run: build
	docker-compose up

dev-build:

dev: dev-build
	
