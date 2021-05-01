from rest_framework import serializers

from .models import Product, TruckImage, Truck


# PRODUCT SERIALIZER
class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer on Product model.

    Fields: uuid, name, slug, info, image, price, quantity, is_available, and truck.
    """
    truck = serializers.CharField(source='truck.uuid')

    class Meta:
        model = Product
        lookup_field = 'uuid'
        # CHECK PROPER USER OF MANY-TO-ONE OUTPUT
        fields = ('uuid', 'name', 'slug', 'info', 'image',
                  'price', 'quantity', 'is_available', 'truck',)


# TRUCKIMAGE SERIALIZER
class TruckImageSerializer(serializers.ModelSerializer):
    """
    Serializer on TruckImage model.

    Fields: uuid, image, is_profile_image.
    """
    truck = serializers.CharField(source='truck.uuid')

    class Meta:
        model = TruckImage
        fields = ('uuid', 'image', 'is_profile_image', 'truck',)


# TRUCK SERIALIZER
class TruckSerializer(serializers.ModelSerializer):
    """
    Serializer on Truck model.

    Fields: uuid, name, slug, info, phone_number, email, website.
    """
    products = ProductSerializer(many=True, read_only=True)
    images = TruckImageSerializer(many=True, read_only=True)

    class Meta:
        model = Truck
        fields = ('uuid', 'name', 'slug', 'info',
                  'phone_number', 'email', 'website', 'products', 'images',)
