from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from authentication.views import ChangePasswordView, LogoutView, RegisterView

from . import views


# WIRE UP USER
urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view()),
    path('register/', RegisterView.as_view()),
    path('password_reset/', include('django_rest_passwordreset.urls',
         namespace='password_reset')),
    path('change_password/<uuid:uuid>/', ChangePasswordView.as_view()),
    path('update_profile/<uuid:uuid>/', views.UpdateUserAPIView.as_view()),
    path('update_image/', views.UserImageUploadAPIView.as_view()),
    path('<uuid:uuid>/', views.UserDetailsAPIView.as_view()),
    path('', views.UserListAPIView.as_view()),
]
