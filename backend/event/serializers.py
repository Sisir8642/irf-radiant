from rest_framework import serializers
from .models import *

class DialogueSerializer(serializers.ModelSerializer):
    class Meta:
       model=Dialogue
       fields="__all__"


class ProgramScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProgramSchedule
        fields="__all__"

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Session
        fields="__all__"


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Video
        fields="__all__"


class OtherSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model=OtherSite
        fields="__all__"

class ProgramHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramHighlight
        fields = ["id", "text"]
        
class ProgramSerializer(serializers.ModelSerializer):
    highlights = ProgramHighlightSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = [
            "id",
            "title",
            "category",
            "image",
            "description",
            "objective",
            "participants",
            "expected_outcome",
            "date",
            "status",
            "highlights",
        ]