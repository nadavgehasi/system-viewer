from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=255)
    info = models.CharField(max_length=255)
    # numberOfServers = models.CharField(max_length=255)
    # numberOfSystems = models.CharField(max_length=255)


class System(models.Model):
    name = models.CharField(max_length=255)
    info = models.CharField(max_length=255)
    universe = models.CharField(max_length=255)
    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='Team'
    )


class Server(models.Model):
    name = models.CharField(max_length=255)
    base = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    tag = models.CharField(max_length=255)
    ram = models.IntegerField()
    cores = models.IntegerField()
    system = models.ManyToManyField(
        System,
        related_name='System'
    )
