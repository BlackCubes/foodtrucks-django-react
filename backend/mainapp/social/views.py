from rest_framework import generics

from .models import Emoji, Like
from .serializers import EmojiSerializer, LikeSerializer


# EMOJI VIEWS
class EmojiListAPIView(generics.ListAPIView):
    """
    API view for Emoji to retrieve lists.

    Request Type: GET.
    """
    queryset = Emoji.objects.all()
    serializer_class = EmojiSerializer


class EmojiDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for Emoji to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    queryset = Emoji.objects.all()
    lookup_field = 'uuid'
    serializer_class = EmojiSerializer


# LIKE VIEWS
# FIND A WAY TO DYNAMICALLY CHANGE/UPDATE WITH TWO FOREIGN FIELDS
class LikeListCreateAPIView(generics.ListCreateAPIView):
    """"""
    queryset = Like.objects.all().order_by('created_at')
    serializer_class = LikeSerializer


class LikeDetailsAPIView(generics.RetrieveUpdateAPIView):
    """"""
    queryset = Like.objects.all().order_by('created_at')
    lookup_field = 'uuid'
    serializer_class = LikeSerializer
