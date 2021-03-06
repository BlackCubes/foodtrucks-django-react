from rest_framework import generics, status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CustomUser
from .serializers import UserSerializer, UpdateUserImageSerializer, UpdateUserSerializer


# USER VIEWS
class UserListAPIView(generics.ListAPIView):
    """
    API view for CustomUser to retrieve lists.

    Request Type: GET.
    """
    permission_classes = (IsAuthenticated,)
    queryset = CustomUser.objects.all().order_by('name')
    serializer_class = UserSerializer


class UserDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for CustomUser to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    permission_classes = (IsAuthenticated,)
    queryset = CustomUser.objects.all()
    lookup_field = 'uuid'
    serializer_class = UserSerializer


class UpdateUserAPIView(generics.UpdateAPIView):
    """
    API view for CustomUser to update.

    LookUp Field: uuid.

    Request Type: PUT and PATCH.
    """
    permission_classes = (IsAuthenticated,)
    queryset = CustomUser.objects.all()
    lookup_field = 'uuid'
    serializer_class = UpdateUserSerializer


class UserImageUploadAPIView(APIView):
    """
    API view for CustomUser to upload user's photo.

    Request Type: POST.
    """
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser,)

    def post(self, request, format=None):
        serializer = UpdateUserImageSerializer(
            data=request.data, instance=request.user)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
