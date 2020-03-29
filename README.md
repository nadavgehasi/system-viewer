# system-viewer

### Backend

Deployed on AWS
http://dockerweb-env.eba-pbxve5yu.us-east-1.elasticbeanstalk.com/

Technologies used:
- Python 3.8
- Django 3.0
- Django Rest framework
- Docker
- Docker-compose
- Poetry
- Pyenv
- AWS Elastic Beanstalk

##### Developer notes
Install environment on local computer
```shell script
poetry install
poetry run pip install -r requirements.txt
```

How to migrate?
```shell script
poetry run python manage.py makemigrations
poetry run python manage.py migrate
```

How to run with docker?
```shell script
docker build -t ophirt/docker-web .
docker run -p 8000:8000 ophirt/docker-web
```

How to run with docker compose?
```shell script
docker-compose build
docker-compose up -d
docker-compose down -v
```