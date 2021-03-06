from rest_framework import serializers

from event.serializers import EventSerializer
from social.serializers import LikeSerializer
from review.serializers import ReviewSerializer

from .models import Product, TruckImage, Truck


# PRODUCT SERIALIZER
class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer on Product model.

    LookUp Field: slug.

    Fields: uuid, name, slug, info, image, price, quantity, is_available, truck, and reviews.
    """
    truck = serializers.CharField(source='truck.slug')
    reviews = ReviewSerializer(many=True, read_only=True)
    likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        lookup_field = 'slug'
        # CHECK PROPER USER OF MANY-TO-ONE OUTPUT
        fields = ('uuid', 'name', 'slug', 'info', 'image',
                  'price', 'quantity', 'is_available', 'truck', 'reviews', 'likes',)


# TRUCKIMAGE SERIALIZER
class TruckImageSerializer(serializers.ModelSerializer):
    """
    Serializer on TruckImage model.

    LookUp Field: slug.

    Fields: uuid, image, is_profile_image.
    """
    truck = serializers.CharField(source='truck.slug')

    class Meta:
        model = TruckImage
        lookup_field = 'uuid'
        fields = ('uuid', 'image', 'is_profile_image', 'truck',)


# TRUCK SERIALIZER
class TruckSerializer(serializers.ModelSerializer):
    """
    Serializer on Truck model.

    LookUp Field: slug.

    Fields: uuid, name, slug, info, phone_number, email, website, products, images, and events.
    """
    products = ProductSerializer(many=True, read_only=True)
    images = TruckImageSerializer(many=True, read_only=True)
    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Truck
        lookup_field = 'slug'
        fields = ('uuid', 'name', 'slug', 'info',
                  'phone_number', 'email', 'website', 'products', 'images', 'events',)
