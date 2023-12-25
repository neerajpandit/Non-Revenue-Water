# serializers.py
from rest_framework import serializers
from .models import *
# remember to import the File model
class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()
class SaveFileSerializer(serializers.Serializer):
    
    class Meta:
        model = File
        fields = "__all__"

class MeterDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'