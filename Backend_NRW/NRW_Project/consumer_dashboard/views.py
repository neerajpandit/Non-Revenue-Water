from django.shortcuts import render
# views.py
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import FormData, UserProfile
from .serializers import FormDataSerializer, UserProfileSerializer

class FormDataCreateView(generics.CreateAPIView):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AdminApprovalView(generics.UpdateAPIView):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer
    permission_classes = [permissions.IsAdminUser]

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.approved = True
        instance.save()

        user_profile = UserProfile.objects.get(user=instance.user)
        user_profile.coins += 10  # Add coins upon approval
        user_profile.save()

        return Response("Form data approved and coins generated.", status=status.HTTP_200_OK)

class UserProfileView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.queryset.get(user=self.request.user)

# Create your views here.
# views.py

# from rest_framework import generics, permissions
# from django.contrib.auth.models import User
# from .models import UserProfile
# from .serializers import UserProfileSerializer

# class UserProfileView(generics.RetrieveUpdateAPIView):
#     serializer_class = UserProfileSerializer
#     permission_classes = (permissions.IsAuthenticated,)

#     def get_object(self):
#         return self.request.user.userprofile

