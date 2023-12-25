from django.contrib import admin
from .models import UserProfile
# Register your models here.
class FileAdmin(admin.ModelAdmin):
    list_display = ["meter_status","meter_id", "device_id", "pressure"]
admin.site.register(UserProfile)