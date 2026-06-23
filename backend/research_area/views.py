from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *
from drf_spectacular.utils import extend_schema

# Create your views here.
@extend_schema(
        tags=["Themed "],
        request=ThemedSerializer
)
class ThemeViewset(ModelViewSet):
    queryset=Theme.objects.all()
    serializer_class=ThemedSerializer
@extend_schema(
        tags=["Publication"],
        request=PublicationTypeSerializer
)
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
@extend_schema(
        tags=["Book"],
        request=BookSerializer
)
class BookViewset(ModelViewSet):
    queryset=Book.objects.all()
    serializer_class=BookSerializer

class GlobalCategoryViewset(ModelViewSet):
    queryset=GlobalCategory.objects.all()
    serializer_class=GlobalCategorySerializer

class GlobalPowerViewset(ModelViewSet):
    queryset=GloabalPower.objects.all()
    serializer_class=GlobalSerializer

@extend_schema(
        tags=["Research"],
        request=ResearchArticalSerializer
)
class ResearchArticalViewset(ModelViewSet):
    queryset=ResearchArtical.objects.all()
    serializer_class=ResearchArticalSerializer