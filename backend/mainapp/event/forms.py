from django.forms import ModelForm

from .models import Event


# EVENT MODEL FORM
class EventModelForm(ModelForm):
    """
    Model Form class for Event with fields of start_time, end_time, and geo_location.
    """
    class Meta:
        model = Event
        fields = ('start_time', 'end_time', 'geo_location',)
