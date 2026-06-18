from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *

# Create your views here.
class ThemeViewset(ModelViewSet):
    queryset=Theme.objects.all()
    serializer_class=ThemedSerializer

class PublicationTypeViewSet(ModelViewSet):
    queryset = PublicationType.objects.all()
    serializer_class = PublicationTypeSerializer

class PublicattionViewset(ModelViewSet):
    serializer_class=PublicationSerializer
    def get_queryset(self):
        queryset = Publication.objects.select_related(
            "category",
            "theme"
        ).order_by("-created_at")

        category = self.request.query_params.get("category")
        theme = self.request.query_params.get("theme")

        if category:
            queryset = queryset.filter(category_id=category)

        if theme:
            queryset = queryset.filter(theme_id=theme)

        return queryset

class BookViewset(ModelViewSet):
    queryset=Book.objects.all()
    serializer_class=BookSerializer

class GlobalCategoryViewset(ModelViewSet):
    queryset=GlobalCategory.objects.all()
    serializer_class=GlobalCategorySerializer

class GlobalPowerViewset(ModelViewSet):
    queryset=GloabalPower.objects.all()
    serializer_class=GlobalSerializer

class ResearchArticalViewset(ModelViewSet):
    queryset=ResearchArtical.objects.all()
    serializer_class=ResearchArticalSerializer