from django.urls import path

from . import views


# WIRE UP REVIEW
urlpatterns = [
    path('', views.ReviewListCreateAPIView.as_view()),
    path('<uuid:uuid>', views.ReviewDetailsAPIView.as_view()),
]
