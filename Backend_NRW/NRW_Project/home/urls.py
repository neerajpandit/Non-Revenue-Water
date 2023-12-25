from django.urls import path
from home.views import BlogList,ChatBot,ContactCreateView,FeedbackCreateView

urlpatterns = [
    path('blogs/', BlogList.as_view(), name='blog-list'),
    path('chatbot/',ChatBot.as_view(),name='chatbot'),
    path('contacts/', ContactCreateView.as_view(), name='contact-create'),
    path('feedback/', FeedbackCreateView.as_view(), name='feedback-create'),

]
