from django.shortcuts import render
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema

# Create your views here.


@extend_schema(
        tags=["Mission and Vision "],
        request=CompanyMissionSeralizer
)
class CompanyMissionViewSet(ModelViewSet):
    queryset=CompanyMission.objects.first()
    serializer_class=CompanyMissionSeralizer


@extend_schema(
        tags=["Achievements "],
        request=RecentAchievementserializer
)
class ReacentAchievementViewSet(ModelViewSet):
    queryset=RecentAchievement.objects.all()
    serializer_class=RecentAchievementserializer

