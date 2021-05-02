from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import MyObtainTokenPairView


# WIRE UP AUTHENTICATION
urlpatterns = [
    path('token/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
