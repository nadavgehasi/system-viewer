build-frontend:
	cd frontend && npm run build

build: 
	docker-compose build

run: build
	docker-compose up

dev-build:

dev: dev-build
	
