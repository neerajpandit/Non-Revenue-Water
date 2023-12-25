# urls.py
from django.urls import path
from .views import FormDataCreateView, AdminApprovalView, UserProfileView

urlpatterns = [
    path('form-submit/', FormDataCreateView.as_view(), name='form-submit'),
    path('admin-approval/<int:pk>/', AdminApprovalView.as_view(), name='admin-approval'),
    path('user-profile/', UserProfileView.as_view(), name='user-profile'),
    # Other URLs
]
