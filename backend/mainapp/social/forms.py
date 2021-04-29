from django.forms import ModelForm

from .models import Emoji, Like


# EMOJI MODAL FORM
class EmojiModelForm(ModelForm):
    """
    Modal Form class for Emoji with fields of emoji and name
    """
    class Meta:
        model = Emoji
        fields = ('emoji', 'name',)


# LIKE MODAL FORM
class LikeModelForm(ModelForm):
    """
    Modal Form class for Like with field of like
    """
    class Meta:
        model = Like
        fields = ('like',)
