from django.shortcuts import render
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema

# Create your views here.
class DiaglougeViewset(ModelViewSet):
    queryset=Dialogue.objects.all()
    serializer_class=DialogueSerializer

class SessionViewset(ModelViewSet):
    queryset=Session.objects.all()
    serializer_class=SessionSerializer

class ProgramScheduleViewset(ModelViewSet):
    queryset=ProgramSchedule.objects.all()
    serializer_class=ProgramScheduleSerializer

class VideoViewset(ModelViewSet):
    queryset=Video.objects.all()
    serializer_class=VideoSerializer

class OtherSiteViewset(ModelViewSet):
    queryset=OtherSite.objects.all()
    serializer_class=OtherSiteSerializer