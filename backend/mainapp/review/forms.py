from django.forms import ModelForm

from .models import Review


# REVIEW MODEL FORM
class ReviewModelForm(ModelForm):
    """
    Model Form class for Review with fields of review.
    """
    class Meta:
        model = Review
        fields = ('review',)
