from django.forms import ModelForm

from .models import Event


# EVENT MODEL FORM
class EventModelForm(ModelForm):
    """
    Model Form class for Event with fields of start_time and end_time.
    """
    class Meta:
        model = Event
        fields = ('start_time', 'end_time',)
