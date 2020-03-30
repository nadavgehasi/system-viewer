from rest_framework import serializers

from .models import Server, System, Team


class ServerSerializer(serializers.ModelSerializer):
    total_systems = serializers.IntegerField(read_only=True)

    class Meta:
        model = Server
        fields = '__all__'


class SystemSerializer(serializers.ModelSerializer):
    servers = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='server-detail')
    total_servers = serializers.IntegerField(read_only=True)

    class Meta:
        model = System
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    systems = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='system-detail')
    servers = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='server-detail')
    total_systems = serializers.IntegerField(read_only=True)
    total_servers = serializers.IntegerField(read_only=True)

    class Meta:
        model = Team
        fields = '__all__'
