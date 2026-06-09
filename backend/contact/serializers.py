from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(
        max_length=100,
        required=False,
        allow_blank=True
    )
    email = serializers.EmailField()
    subject = serializers.CharField(
        max_length=255,
        required=False,
        allow_blank=True
    )
    message = serializers.CharField(max_length=500)