from rest_framework import serializers

from .models import Product, TruckImage, Truck


# TRUCK SERIALIZER
class TruckSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer on Truck model.

    Fields: uuid, name, slug, info, phone_number, email, website.
    """
    class Meta:
        model = Truck
        fields = ('uuid', 'name', 'slug', 'info',
                  'phone_number', 'email', 'website',)


# TRUCKIMAGE SERIALIZER
class TruckImageSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer on TruckImage model.

    Fields: uuid, image, is_profile_image.
    """
    class Meta:
        model = TruckImage
        fields = ('uuid', 'image', 'is_profile_image',)


# PRODUCT SERIALIZER
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer on Product model.

    Fields: uuid, name, slug, info, image, price, quantity, is_available, and truck.
    """
    class Meta:
        model = Product
        # CHECK PROPER USER OF MANY-TO-ONE OUTPUT
        fields = ('uuid', 'name', 'slug', 'info', 'image',
                  'price', 'quantity', 'is_available', 'truck')
