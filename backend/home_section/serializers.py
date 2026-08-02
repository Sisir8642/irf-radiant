from rest_framework import serializers
from .models import HighlightSection, Session


class SessionSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = [
            "id",
            "title",
            "subtitle",
            "image",
            "order",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None


class HighlightSectionSerializer(serializers.ModelSerializer):

    sessions = SessionSerializer(many=True, read_only=True)

    slide_image_1 = serializers.SerializerMethodField()
    slide_image_2 = serializers.SerializerMethodField()
    slide_image_3 = serializers.SerializerMethodField()

    class Meta:
        model = HighlightSection
        fields = [
            "id",
            "title",
            "tagline",
            "description",
            "button_text",
            "button_url",
            "slide_image_1",
            "slide_image_2",
            "slide_image_3",
            "sessions",
        ]

    def get_slide_image_1(self, obj):
        request = self.context["request"]
        return request.build_absolute_uri(obj.slide_image_1.url)

    def get_slide_image_2(self, obj):
        request = self.context["request"]
        return request.build_absolute_uri(obj.slide_image_2.url)

    def get_slide_image_3(self, obj):
        request = self.context["request"]
        return request.build_absolute_uri(obj.slide_image_3.url)