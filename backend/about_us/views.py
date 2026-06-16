from django.shortcuts import render
from rest_framework.response import Response
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema

# Create your views here.


@extend_schema(
        tags=["Mission and Vision "],
        request=CompanyMissionSeralizer
)
class CompanyMissionViewSet(ModelViewSet):
    queryset = CompanyMission.objects.all()
    serializer_class = CompanyMissionSeralizer

    def list(self, request, *args, **kwargs):
        obj = CompanyMission.objects.first()
        serializer = self.get_serializer(obj)
        return Response(serializer.data)


@extend_schema(
        tags=["Achievements "],
        request=RecentAchievementSerializer
)
class ReacentAchievementViewSet(ModelViewSet):
    queryset=RecentAchievement.objects.all()
    serializer_class=RecentAchievementSerializer

