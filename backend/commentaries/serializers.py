from rest_framework import serializers
from .models import *



class CommentariesSerializer(serializers.ModelSerializer):
    class Meta:
       model=Commentaries
       fields='__all__'
