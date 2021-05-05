from rest_framework import serializers

from foodtruck.models import Product
from .models import Emoji, Like


# LIKE SERIALIZER
class LikeSerializer(serializers.ModelSerializer):
    """
    Normal Serializer on Like model.

    LookUp Field: uuid.

    Fields: uuid, like, emoji, and product.
    """
    # emoji = serializers.CharField(source='emoji.emoji')
    # product = serializers.CharField(source='product.slug')
    emoji = serializers.SlugRelatedField(
        slug_field='emoji', queryset=Emoji.objects.all())
    product = serializers.SlugRelatedField(
        slug_field='slug', queryset=Product.objects.all())

    class Meta:
        model = Like
        lookup_field = 'uuid'
        fields = ('uuid', 'like', 'emoji', 'product',)


# SPECIAL CASE LIKE SERIALIZER
class SpecialCaseLikeSerializer(serializers.ModelSerializer):
    """
    Special case for Serializing on Like Model.

    If the object exists, then update the like field by incrementing.

    If the object does not exist, then create a new one.
    """
    emoji = serializers.SlugRelatedField(
        slug_field='emoji', queryset=Emoji.objects.all())
    product = serializers.SlugRelatedField(
        slug_field='slug', queryset=Product.objects.all())

    class Meta:
        model = Like
        fields = ('uuid', 'like', 'emoji', 'product',)

    def create(self, validated_data):
        # like_uuid = validated_data.get('uuid', None)
        like_uuid = self.initial_data['uuid'] if 'uuid' in self.initial_data else None
        if like_uuid is not None:
            like_exist = Like.objects.filter(uuid=like_uuid).first()
            if like_exist is not None:
                like_exist.like += validated_data['like']
                like_exist.save()
                return like_exist

        new_like = Like.objects.create(**validated_data)
        return new_like


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
