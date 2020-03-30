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

#### Developer notes

##### How to run?
1. Install & Run on local computer
   ```shell script
   poetry install
   poetry run pip install -r requirements.txt
   poetry run python manage.py runserver 0:8000
   ```

2. Run with docker
   ```shell script
   docker build -t ophirt/docker-web .
   docker run -v /var/myapp/database/:/myapp/database/ -p 8000:8000 --name system-viewer -d ophirt/docker-web
   docker stop system-viewer
   docker rm system-viewer
   ```

3. Run with docker compose
   ```shell script
   docker-compose build
   docker-compose up -d
   docker-compose down -v
   ```

##### How to migrate?
```shell script
poetry run python manage.py makemigrations
poetry run python manage.py migrate
```