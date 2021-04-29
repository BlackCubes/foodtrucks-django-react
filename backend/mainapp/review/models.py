from django.db import models
from django.utils.translation import ugettext_lazy as _
import uuid

# Create your models here.


# REVIEWS
class Review(models.Model):
    """
    Review models with fields of uuid, review, created_at, updated_at, product, and user. ForeignKey: Product and User.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    review = models.CharField(max_length=280)
    created_at = models.DateTimeField(
        _('review created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('review updated at'), auto_now=True, blank=True, null=True)
    product = models.ForeignKey('foodtruck.Product', on_delete=models.CASCADE)
    user = models.ForeignKey('user.CustomUser', on_delete=models.CASCADE)
