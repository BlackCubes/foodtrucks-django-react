from rest_framework import serializers

from .models import Emoji, Like


# LIKE SERIALIZER
class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer on Like model.

    LookUp Field: uuid.

    Fields: uuid, like, emoji, and product.
    """
    emoji = serializers.CharField(source='emoji.uuid')
    product = serializers.CharField(source='product.uuid')

    class Meta:
        model = Like
        lookup_field = 'uuid'
        fields = ('uuid', 'like', 'emoji', 'product',)


# EMOJI SERIALIZER
class EmojiSerializer(serializers.ModelSerializer):
    """
    Serializer on Emoji model.

    LookUp field: uuid.

    Fields: uuid, emoji and name.
    """
    class Meta:
        model = Emoji
        lookup_field = 'uuid'
        fields = ('uuid', 'emoji', 'name',)
