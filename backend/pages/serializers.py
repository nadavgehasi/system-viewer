from rest_framework import serializers

from .models import Server, System, Team


class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = '__all__'


class SystemSerializer(serializers.ModelSerializer):
    servers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = System
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    systems = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    servers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Team
        fields = '__all__'
