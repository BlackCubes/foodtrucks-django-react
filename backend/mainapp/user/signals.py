from django.core.mail import EmailMessage
from django.db.models.signals import post_save
from django.dispatch import receiver

from mainapp.settings import EMAIL_FROM
from .models import CustomUser


@receiver(post_save, sender=CustomUser)
def send_mail_on_create(sender, instance, created=False, **kwargs):
    """
    Send email to user upon registration.
    """
    if created:
        user = instance
        message = f'Welcome to Foodtrucks App! We are pleased to have you! {user.name}'
        mail = EmailMessage(
            subject='Welcome to Foodtrucks!',
            body=message,
            from_email=EMAIL_FROM,
            to=[user.email],
            reply_to=[EMAIL_FROM],
        )
        return mail.send()
