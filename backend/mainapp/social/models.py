from django.db import models
from django.utils.translation import ugettext_lazy as _
import uuid

# Create your models here.


# EMOJIS
class Emoji(models.Model):
    """
    Emoji model with fields of uuid, emoji, name, created_at, and updated_at.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    emoji = models.TextField()
    name = models.TextField(_('emoji name'))
    created_at = models.DateTimeField(
        _('emoji created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('emoji updated at'), auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.emoji


# LIKES
class Like(models.Model):
    """
    Like model with fields of uuid, like, created_at, updated_at, emoji, and product.

    ForeignKey: Emoji and Product.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    like = models.IntegerField(default=0)
    created_at = models.DateTimeField(
        _('like created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('like created at'), auto_now_add=True, blank=True, null=True)
    emoji = models.ForeignKey(Emoji, on_delete=models.CASCADE)
    product = models.ForeignKey(
        'foodtruck.Product', related_name='likes', on_delete=models.CASCADE)
