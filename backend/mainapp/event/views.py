from rest_framework import generics

from .models import Event
from .serializers import EventSerializer


# EVENT VIEWS
class EventListAPIView(generics.ListAPIView):
    """
    API view for Event to retrieve lists.

    Request Type: GET.
    """
    queryset = Event.objects.all().order_by('date')
    serializer_class = EventSerializer


class EventDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for Event to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    queryset = Event.objects.all().order_by('date')
    lookup_field = 'uuid'
    serializer_class = EventSerializer
