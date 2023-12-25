from django.urls import path
from .views import UploadFileView,MeterData
urlpatterns = [
    path('upload/', UploadFileView.as_view(), name='upload-file'),
    path('meterdata/', MeterData.as_view(), name='meterdata'),
]
