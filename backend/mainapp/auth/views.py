from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny

from .serializers import MyTokenObtainPairSerializer


class MyObtainTokenPairView(TokenObtainPairView):
    """
    Subclass for TokenObtainPairView.
    """
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer
