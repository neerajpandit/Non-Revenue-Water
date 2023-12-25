from django.contrib import admin
from django.contrib import admin
from .models import File
class FileAdmin(admin.ModelAdmin):
    list_display = ["meter_status","meter_id", "device_id", "pressure"]
admin.site.register(File, FileAdmin)