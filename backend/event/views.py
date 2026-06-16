from django.shortcuts import render
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema

# Create your views here.
@extend_schema(
        tags=["Dialogue"],
        request=DialogueSerializer
)
class DiaglougeViewset(ModelViewSet):
    queryset=Dialogue.objects.all()
    serializer_class=DialogueSerializer
@extend_schema(
        tags=["Session"],
        request=SessionSerializer
)
class SessionViewset(ModelViewSet):
    queryset=Session.objects.all()
    serializer_class=SessionSerializer

@extend_schema(
        tags=["Program Schedule"],
        request=ProgramScheduleSerializer
)
class ProgramScheduleViewset(ModelViewSet):
    queryset=ProgramSchedule.objects.all()
    serializer_class=ProgramScheduleSerializer

@extend_schema(
        tags=["Video"],
        request=VideoSerializer
)
class VideoViewset(ModelViewSet):
    queryset=Video.objects.all()
    serializer_class=VideoSerializer

@extend_schema(
        tags=["Other site"],
        request=OtherSiteSerializer
)

class OtherSiteViewset(ModelViewSet):
    queryset=OtherSite.objects.all()
    serializer_class=OtherSiteSerializer
@extend_schema(
        tags=["Program"],
        request=ProgramSerializer
)
class ProgramViewset(ModelViewSet):
    queryset=Program.objects.all()
    serializer_class=ProgramSerializer