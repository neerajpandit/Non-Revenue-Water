from django.contrib import admin

# Register your models here.
from home.models import *

admin.site.register(Contact)
admin.site.register(Feedback)
admin.site.register(Blog)