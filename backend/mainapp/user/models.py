import os
import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


def upload_to(instance, filename):
    """
    Changed the output of the photo name.
    """
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"images/user/{instance.uuid}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"


class CustomUser(AbstractUser):
    """
    A custom user model with fields of uuid, name, email, profile_image, password_changed,
    password_reset_token and password_reset_expires.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    username = None
    first_name = None
    last_name = None
    name = models.CharField(_('name'), max_length=70,
                            default='Casey Dublin')
    email = models.EmailField(_('email address'), unique=True)
    profile_image = models.ImageField(upload_to=upload_to)
    password_changed = models.DateTimeField(
        _('password changed'), blank=True, null=True)
    password_reset_token = models.TextField(
        _('password reset token'), max_length=256, blank=True)
    password_reset_expires = models.DateTimeField(
        _('password reset expires'), blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
