from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from user.models import CustomUser

from .serializers import ChangePasswordSerializer, RegisterSerializer


class RegisterView(generics.CreateAPIView):
    """
    API view for CustomUser to register new users.

    Request Type: POST.
    """
    permission_classes = (AllowAny,)
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer


class ChangePasswordView(generics.UpdateAPIView):
    """
    API view for CustomUser to change user's password.

    Request Type: PATCH and PUT.
    """
    permission_classes = (IsAuthenticated,)
    queryset = CustomUser.objects.all()
    lookup_field = 'uuid'
    serializer_class = ChangePasswordSerializer


class LogoutView(APIView):
    """
    An APIView for logging out. Blacklists tokens.

    Request Type: POST.
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        """
        Blacklists token.
        """
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)
