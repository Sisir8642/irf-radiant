from rest_framework import serializers
from models import *

class DialogueSerializer(serializers.ModelSerializer):
    class Meta:
       model=Dialogue
       fields="__all__"


class ProgramScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProgramSchedule
        fileds="__all__"

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Session
        fileds="__all__"


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Video
        fields="__all__"


class OtherSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model=OtherSite
        fields="__all__"

