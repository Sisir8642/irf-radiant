from rest_framework import serializers
from .models import *

class ThemedSerializer(serializers.Serializer):
    class Meta:
        model=Theme
        fields='__all__'

class PublicationTypeSerializer(serializers.Serializer):
    class Meta:
        model=PublicationType
        fields='__all__'

class PublicationSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.category", read_only=True)
    theme_name = serializers.CharField(source="theme.name", read_only=True)  

    class Meta:
        model = Publication
        fields ='__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields="__all__"

class GlobalCategorySerializer(serializers.ModelField):
    class Meta:
        model=GlobalCategory
        fields="__all__"

class GlobalSerializer(serializers.ModelSerializer):
    category_name=serializers.CharField(source="category.category",read_only=True)
    class Meta:
        model=GloabalPower
        fields="__all__"


class ResearchArticalSerializer(serializers.ModelSerializer):
    class Meta:
        model=ResearchArtical
        fields='__all__'




