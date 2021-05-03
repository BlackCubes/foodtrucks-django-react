from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Emoji, Like
from .serializers import EmojiSerializer, LikeSerializer


# EMOJI VIEWS
class EmojiListAPIView(generics.ListAPIView):
    """
    API view for Emoji to retrieve lists.

    Request Type: GET.
    """
    permission_classes = (AllowAny,)
    queryset = Emoji.objects.all()
    serializer_class = EmojiSerializer


class EmojiDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for Emoji to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    permission_classes = (AllowAny,)
    queryset = Emoji.objects.all()
    lookup_field = 'uuid'
    serializer_class = EmojiSerializer


# LIKE VIEWS
class LikeCreateAPIView(generics.CreateAPIView):
    """
    API view for Like to create new.

    Request Type: POST.
    """
    permission_classes = (AllowAny,)
    queryset = Like.objects.all().order_by('created_at')
    serializer_class = LikeSerializer


class LikeDetailsAPIView(generics.RetrieveUpdateAPIView):
    """
    API view for Like to retrieve or update.

    LookUp Field: uuid.

    Request Type: GET, PUT, and PATCH.
    """
    permission_classes = (AllowAny,)
    queryset = Like.objects.all().order_by('created_at')
    lookup_field = 'uuid'
    serializer_class = LikeSerializer
