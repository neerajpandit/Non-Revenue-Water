from django.db import models

class File(models.Model):
    # id = models.CharField(primary_key=True, max_length=6)
    meter_status = models.CharField(max_length=100,null=True)
    meter_id = models.CharField(max_length=100,null=True)
    device_id = models.CharField(max_length=200,null=True)
    pressure = models.CharField(max_length=200,null=True)
    def __str__(self):
        return self.meter_id