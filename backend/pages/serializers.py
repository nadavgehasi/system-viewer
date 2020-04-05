from rest_framework import serializers

from .models import Server, System, Team, Universe, Base


class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ('name', 'base', 'status', 'tag', 'team', 'systems', 'cpu_cores', 'memory_total', 'memory_used',
                  'memory_percent')


class SystemSerializer(serializers.ModelSerializer):
    servers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    def validate(self, data):
        if data['universe'].team != data['team']:
            raise serializers.ValidationError("Universe team must match the team")
        return data

    class Meta:
        model = System
        fields = '__all__'


class UniverseSerializer(serializers.ModelSerializer):
    systems = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Universe
        fields = '__all__'


class BaseSerializer(serializers.ModelSerializer):
    servers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Base
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    systems = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    servers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    universes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Team
        fields = '__all__'
