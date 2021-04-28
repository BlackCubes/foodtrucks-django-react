from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
import uuid

from .managers import CustomUserManager

# Create your models here.


class CustomUser(AbstractUser):
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    username = None
    first_name = None
    last_name = None
    name = models.CharField(_('name'), max_length=70)
    email = models.EmailField(_('email address'), unique=True)
    profile_image = models.ImageField(upload_to='images/user/')
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
