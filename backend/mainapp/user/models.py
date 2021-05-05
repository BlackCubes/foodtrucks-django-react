import os
import uuid
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django_rest_passwordreset.signals import reset_password_token_created

from .managers import CustomUserManager


# SIGNAL FOR SENDING EMAIL ON PASSWORD RESET
@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Signal for sending email on password reset.
    """
    email_plaintext_message = "{}?token={}".format(
        reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Foodtrucks App"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [reset_password_token.user.email]
    )


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
