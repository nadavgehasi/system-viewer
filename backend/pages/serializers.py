from rest_framework import serializers

from .models import Server, System, Team


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team


class SystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = System


class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
