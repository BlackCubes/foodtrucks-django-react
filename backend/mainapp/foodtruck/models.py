import uuid
from django.db import models
from django.db.models.signals import pre_save
from django.template.defaultfilters import slugify
from django.utils.translation import ugettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField

from mainapp.utils import slug_generator


# TRUCKS
class Truck(models.Model):
    """
    Truck model with fields of uuid, name, slug, info, phone_number, email, website, created_at, and updated_at.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_('truck name'), max_length=100, unique=True)
    slug = models.SlugField(
        _('truck slug'), max_length=100, null=True, blank=True)
    info = models.TextField(_('truck info'))
    phone_number = PhoneNumberField(_('truck phone number'))
    email = models.EmailField(_('truck email'), unique=True)
    website = models.URLField(_('truck website'), blank=True)
    created_at = models.DateTimeField(
        _('truck created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('truck updated at'), auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.name


# TRUCK IMAGES
class TruckImage(models.Model):
    """
    TruckImage model with fields of uuid, image, is_profile_image, created_at, updated_at, and truck. ForeignKey=Truck.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(upload_to='images/truck')
    is_profile_image = models.BooleanField(
        _('is profile image'), default=False)
    created_at = models.DateTimeField(
        _('truck image created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('truck image updated at'), auto_now=True, blank=True, null=True)
    truck = models.ForeignKey(Truck, on_delete=models.CASCADE)


# PRODUCTS
class Product(models.Model):
    """
    Product model with fields of uuid, name, slug, info, image, price, quantity, is_available,
    created_at, updated_at, and truck. ForeignKey=Truck.
    """
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_('product name'), max_length=182)
    slug = models.SlugField(
        _('product slug'), max_length=182, null=True, blank=True)
    info = models.CharField(_('product info'), max_length=183)
    image = models.ImageField(upload_to='images/product/')
    # VALIDATORS FOR PRICE!!!
    price = models.FloatField(_('product price'))
    quantity = models.IntegerField(_('product quantity'), default=0)
    is_available = models.BooleanField(_('is available'), default=True)
    created_at = models.DateTimeField(
        _('product created at'), auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(
        _('product updated at'), auto_now=True, blank=True, null=True)
    truck = models.ForeignKey(Truck, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


# Using pre-save signals with slug_generator to create the slug
pre_save.connect(slug_generator, sender=Truck)
pre_save.connect(slug_generator, sender=Product)
