from rest_framework import serializers
from .models import *

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ['id', 'image']