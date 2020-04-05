from django.db import models
from .utils import get_from_graphite


class Team(models.Model):
    name = models.CharField(max_length=255, unique=True)
    info = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Base(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Universe(models.Model):
    name = models.CharField(max_length=255)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='universes')

    class Meta:
        unique_together = ['name', 'team']
        ordering = ["team", "name"]

    def __str__(self):
        return f'{self.team}: {self.name}'


class System(models.Model):
    name = models.CharField(max_length=255, unique=True)
    info = models.CharField(max_length=255)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='systems')
    universe = models.ForeignKey(Universe, on_delete=models.CASCADE, related_name='systems')

    def __str__(self):
        return self.name


class Server(models.Model):
    class StatusChoice(models.TextChoices):
        UP = 'Up'
        DOWN = 'Down'

    class TagChoice(models.TextChoices):
        OPERATIONAL = 'Operational'
        TESTS = 'Tests'

    name = models.CharField(max_length=255, unique=True)
    base = models.ForeignKey(Base, on_delete=models.CASCADE, related_name='servers')
    status = models.CharField(max_length=255, choices=StatusChoice.choices, default=StatusChoice.UP)
    tag = models.CharField(max_length=255, choices=TagChoice.choices, default=TagChoice.OPERATIONAL)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='servers')
    systems = models.ManyToManyField(System, related_name='servers')

    @property
    def cpu_cores(self):
        return get_from_graphite(self.name, 'cpu')

    @property
    def memory_total(self):
        return get_from_graphite(self.name, 'memory.total')

    @property
    def memory_used(self):
        return get_from_graphite(self.name, 'memory.used')

    @property
    def memory_percent(self):
        return get_from_graphite(self.name, 'memory.percent')

    def __str__(self):
        return self.name
