from rest_framework import serializers
from .models import *

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ['id', 'image']

class SliderSerializer(serializers.ModelSerializer):
    images = SliderImageSerializer(many=True, read_only=True)

    class Meta:
        model = Slider
        fields = ['id', 'title', 'description','images']



class GalllerySerializer(serializers.ModelSerializer):
    class Meta:
        model=Gallery
        fields='__all__'