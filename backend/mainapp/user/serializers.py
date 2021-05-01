from rest_framework import serializers

from .models import CustomUser


# USER SERIALIZER
class UserSerializer(serializers.ModelSerializer):
    """
    Serializer on CustomUser model.

    LookUp Field: uuid.

    Fields: uuid, name, email, and profile_image.
    """
    class Meta:
        model = CustomUser
        lookup_field = 'uuid'
        fields = ('uuid', 'name', 'email', 'profile_image',)
