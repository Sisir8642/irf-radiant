from django.shortcuts import render
from .models import *
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from drf_spectacular.utils import extend_schema


# Create your views here.





@extend_schema(
        tags=["Commentaries"],
        request=CommentariesSerializer
        )
class CommentariesViewSet(ModelViewSet):
    queryset=Commentaries.objects.all()
    serializer_class=CommentariesSerializer