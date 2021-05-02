from rest_framework import generics

from .models import CustomUser
from .serializers import UserSerializer


# USER VIEWS
class UserListAPIView(generics.ListAPIView):
    """
    API view for CustomUser to retrieve lists.

    Request Type: GET.
    """
    queryset = CustomUser.objects.all().order_by('name')
    serializer_class = UserSerializer


class UserDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view for CustomUser to retrieve, update, or delete.

    LookUp Field: uuid.

    Request Type: GET, PUT, PATCH, and DELETE.
    """
    queryset = CustomUser.objects.all().order_by('name')
    lookup_field = 'uuid'
    serializer_class = UserSerializer
