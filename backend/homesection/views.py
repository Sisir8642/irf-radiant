from django.shortcuts import render
from .models import *
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from drf_spectacular.utils import extend_schema



# Create your views here.
@extend_schema(
        tags=["Slider"],
        request=SliderSerializer
        )
class SliderViewSet(ModelViewSet):
    queryset=Slider.objects.filter(is_active=True)
    serializer_class=SliderSerializer
