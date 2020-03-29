from django.db import models


# Create your models here.

class Server(models.Model):
    name = models.CharField(max_length=255)
    base = models.CharField(max_length=255)
    team = models.CharField(max_length=255)
