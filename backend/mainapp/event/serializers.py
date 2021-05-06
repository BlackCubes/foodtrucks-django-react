from rest_framework import serializers

from foodtruck.models import Truck
from .models import Event


# EVENT SERIALIZER
class EventSerializer(serializers.ModelSerializer):
    """
    Serializer on Event model.

    LookUp Field: slug.

    Fields: uuid, date, start_time, end_time, and truck.
    """
    truck = serializers.PrimaryKeyRelatedField(
        queryset=Truck.objects.all(), many=True)

    class Meta:
        model = Event
        lookup_field = 'uuid'
        fields = ('uuid', 'date', 'start_time', 'end_time', 'truck',)
