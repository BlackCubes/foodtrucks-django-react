from django.forms import ModelForm

from .modals import Emoji, Like


# EMOJI MODAL FORM
class EmojiModalForm(ModalForm):
    """
    Modal Form class for Emoji with fields of emoji and name
    """
    class Meta:
        modal = Emoji
        fields = ('emoji', 'name',)


# LIKE MODAL FORM
class LikeModalForm(ModalForm):
    """
    Modal Form class for Like with field of like
    """
    class Meta:
        modal = Like
        fields = ('like',)
