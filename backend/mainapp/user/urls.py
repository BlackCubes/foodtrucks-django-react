from django.urls import path

from . import views


# WIRE UP USER
urlpatterns = [
    path('', views.UserListAPIView.as_view()),
    path('<uuid:uuid>', views.UserDetailsAPIView.as_view()),
]
