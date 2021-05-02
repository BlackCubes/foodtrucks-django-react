from django.urls import path

from . import views


# WIRE UP EVENT
urlpatterns = [
    path('', views.EventListAPIView.as_view()),
    path('<uuid:uuid>', views.EventDetailsAPIView.as_view()),
]
