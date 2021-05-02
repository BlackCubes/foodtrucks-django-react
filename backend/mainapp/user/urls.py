from django.urls import path

from authentication.views import MyObtainTokenPairView

from . import views


# WIRE UP USER
urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view()),
    path('<uuid:uuid>', views.UserDetailsAPIView.as_view()),
    path('', views.UserListAPIView.as_view()),
]
