from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

from rest_framework import viewsets

from .serializers import ServerSerializer
from .models import Server
from rest_framework import permissions


def home_page_view(request):
    return HttpResponse('Hello, World!')


class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all().order_by('name')
    serializer_class = ServerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
