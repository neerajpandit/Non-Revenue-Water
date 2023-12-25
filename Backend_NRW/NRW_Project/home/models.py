from django.db import models

# Create your models here.
from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings
User = settings.AUTH_USER_MODEL
class Blog(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_images/')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.subject  # Customize how the model instance is displayed

class Feedback(models.Model):
    RATING_CHOICES = [
        ('poor', 'Poor'),
        ('below_average', 'Below Average'),
        ('average', 'Average'),
        ('good', 'Good'),
        ('excellent', 'Excellent'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    rating = models.CharField(max_length=50, choices=RATING_CHOICES)
    feedback = models.TextField()

    def __str__(self):
        return f"{self.name}'s Feedback"