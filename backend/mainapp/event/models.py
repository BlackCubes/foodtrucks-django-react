from django.db import models
from django.utils.translation import ugettext_lazy as _
import uuid


# EVENTS
class Event(models.Model):
    """
    Event model with fields of uuid, date, start_time, end_time, geo_location, and foodtruck. ForeignKey: Truck.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=True)
    date = models.DateField(_('event date'))
    start_time = models.TimeField(_('start time'))
    end_time = models.TimeField(_('end time'))
    truck = models.ManyToManyField('foodtruck.Truck')
