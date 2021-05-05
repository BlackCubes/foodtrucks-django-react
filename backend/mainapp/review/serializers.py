from rest_framework import serializers

from foodtruck.models import Product
from user.models import CustomUser
from .models import Review


# REVIEW SERIALIZER
class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializer on Review model.

    LookUp Field: uuid.

    Fields: uuid, review, created_at, updated_at, product, and user.
    """
    # product = serializers.CharField(source='product.slug')
    # user = serializers.CharField(source='user.uuid')
    product = serializers.SlugRelatedField(
        slug_field='slug', queryset=Product.objects.all())
    user = serializers.SlugRelatedField(
        slug_field='uuid', queryset=CustomUser.objects.all())

    class Meta:
        model = Review
        lookup_field = 'uuid'
        fields = ('uuid', 'review', 'created_at',
                  'updated_at', 'product', 'user',)
