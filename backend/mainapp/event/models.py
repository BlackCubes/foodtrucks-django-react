import uuid
from django.db import models
from django.utils.translation import ugettext_lazy as _


# EVENTS
class Event(models.Model):
    """
    Event model with fields of uuid, date, start_time, end_time, and foodtruck.

    ManyToMany: Truck.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=True)
    date = models.DateField(_('event date'))
    start_time = models.TimeField(_('start time'))
    end_time = models.TimeField(_('end time'))
    truck = models.ManyToManyField(
        'foodtruck.Truck', related_name='images', on_delete=models.CASCADE)
