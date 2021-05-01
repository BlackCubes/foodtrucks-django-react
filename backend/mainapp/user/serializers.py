from rest_framework import serializers

from review.serializers import ReviewSerializer

from .models import CustomUser


# USER SERIALIZER
class UserSerializer(serializers.ModelSerializer):
    """
    Serializer on CustomUser model.

    LookUp Field: uuid.

    Fields: uuid, name, email, profile_image, and reviews.
    """
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = CustomUser
        lookup_field = 'uuid'
        fields = ('uuid', 'name', 'email', 'profile_image', 'reviews',)
