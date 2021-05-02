from rest_framework import serializers

from .models import Review


# REVIEW SERIALIZER
class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializer on Review model.

    LookUp Field: uuid.

    Fields: uuid, review, created_at, updated_at, product, and user.
    """
    product = serializers.CharField(source='product.slug')
    user = serializers.CharField(source='user.uuid')

    class Meta:
        model = Review
        lookup_field = 'uuid'
        fields = ('uuid', 'review', 'created_at',
                  'updated_at', 'product', 'user',)
