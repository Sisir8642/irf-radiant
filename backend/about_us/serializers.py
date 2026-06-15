from rest_framework import serializers
from .models import *


class CompanyMissionSeralizer(serializers.ModelSerializer):
    class Meta:
        model=CompanyMission
        fields='__all__'

class RecentAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model=RecentAchievement
        fields='__all__'
