from django.db.models import Count
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

from rest_framework import viewsets

from .serializers import ServerSerializer, SystemSerializer, TeamSerializer
from .models import Server, System, Team
from rest_framework import permissions


def home_page_view(request):
    return HttpResponse('Hello, World!')


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('id')
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Team.objects.annotate(
            total_systems=Count('systems', distinct=True),
            total_servers=Count('servers', distinct=True)
        )


class SystemViewSet(viewsets.ModelViewSet):
    queryset = System.objects.all().order_by('id')
    serializer_class = SystemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return System.objects.annotate(
            total_servers=Count('servers')
        )


class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all().order_by('id')
    serializer_class = ServerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Server.objects.annotate(
            total_systems=Count('systems'),
        )
