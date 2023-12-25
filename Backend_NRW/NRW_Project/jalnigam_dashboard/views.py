from django.shortcuts import render
from rest_framework import generics
import io, csv, pandas as pd
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework.views import APIView
# remember to import the File model
# remember to import the FileUploadSerializer and SaveFileSerializer
class UploadFileView(generics.CreateAPIView):
    serializer_class = FileUploadSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        reader = pd.read_csv(file)
        for _, row in reader.iterrows():
            if row.get('Status') == 'High-Frequency Noise Detected':
                new_file = File(
                        meter_status=row['Status'],
                        meter_id= row["meter ID"],
                        device_id= row['Device ID'],
                        pressure= row["Pressure (PSI)"]

                        )
                # if(meter_status=="High-Frequency Noise Detected")
                new_file.save()
        return Response({"status": "success"},status.HTTP_201_CREATED)
    
class MeterData(APIView):
    def get(self, request, format=None):
        queryset = File.objects.all()  # Retrieve all objects from YourModel
        serializer = MeterDataSerializer(queryset, many=True)  # Serialize the queryset
        
        return Response(serializer.data, status=status.HTTP_200_OK)