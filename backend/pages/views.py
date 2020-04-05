from django.db.models import Count
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

from rest_framework import viewsets

from .serializers import ServerSerializer, SystemSerializer, TeamSerializer, UniverseSerializer, BaseSerializer
from .models import Server, System, Team, Universe, Base
from rest_framework import permissions, generics
from filters.mixins import FiltersMixin


def home_page_view(request):
    return HttpResponse('Hello, World!')


class TeamViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Team.objects.prefetch_related('systems', 'servers').all().order_by('id')
    serializer_class = TeamSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_mappings = {
        'id': 'id',
        'name': 'name',
        'info': 'info',
    }


class SystemViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = System.objects.prefetch_related('servers').all().order_by('id')
    serializer_class = SystemSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_mappings = {
        'id': 'id',
        'name': 'name',
        'info': 'info',
        'universe': 'universe',
        'team': 'team',
    }


class UniverseViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Universe.objects.prefetch_related('systems').all().order_by('id')
    serializer_class = UniverseSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_mappings = {
        'id': 'id',
        'name': 'name',
        'team': 'team',
    }


class BaseViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Base.objects.all().order_by('id')
    serializer_class = BaseSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_mappings = {
        'id': 'id',
    }


class ServerViewSet(FiltersMixin, viewsets.ModelViewSet):
    queryset = Server.objects.prefetch_related('systems').all().order_by('id')
    serializer_class = ServerSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_mappings = {
        'id': 'id',
        'name': 'name',
        'base': 'base',
        'status': 'status',
        'tag': 'tag',
        'team': 'team',
    }
