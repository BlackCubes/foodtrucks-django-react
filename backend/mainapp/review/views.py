from rest_framework import generics

from .models import Review
from .serializers import ReviewSerializer


# REVIEW VIEWS
class ReviewListCreateAPIView(generics.ListCreateAPIView):
    """
    API view for Review to retrieve lists or create new.

    Request Type: GET and POST.
    """
    queryset = Review.objects.all().order_by('created_at')
    serializer_class = ReviewSerializer


class ReviewDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view for Review to retrieve, update, or delete.

    LookUp Field: uuid.

    Request Type: GET, PUT, PATCH, and DELETE.
    """
    queryset = Review.objects.all().order_by('created_at')
    lookup_field = 'uuid'
    serializer_class = ReviewSerializer
