from rest_framework import serializers
from home.models import Blog,Contact,Feedback

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'title', 'description', 'image', 'author', 'created_at')
        # read_only_fields = ('id', 'created_at', 'author')

class ChatBotSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=500)



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'email', 'subject', 'message')

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('id', 'name', 'email', 'rating', 'feedback')