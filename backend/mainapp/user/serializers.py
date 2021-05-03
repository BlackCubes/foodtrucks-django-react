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


# UPDATE USER
class UpdateUserSerializer(serializers.ModelSerializer):
    """
    Model Serializer on CustomUser model. Changes the user's name and email.

    Fields: name and email.
    """
    name = serializers.CharField(required=True, min_length=2, max_length=70)
    email = serializers.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = ('name', 'email',)

    def validate_email(self, value):
        """
        Checks to see if the new requested email already exists.
        """
        user = self.context['request'].user
        if CustomUser.objects.exclude(uuid=user.uuid).filter(email=value).exists():
            raise serializers.ValidationError(
                {'email': 'This email is already in use.'})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.uuid != instance.uuid:
            raise serializers.ValidationError(
                {'authorize': 'You do not have permission for this user.'})

        instance.name = validated_data['name']
        instance.email = validated_data['email']

        instance.save()

        return instance


# UPDATE USER IMAGE
class UpdateUserImageSerializer(serializers.ModelSerializer):
    """
    Model Serializer on CustomUser model. Changes the user's profile image.

    Fields: profile_image.
    """
    profile_image = serializers.ImageField(required=True)

    class Meta:
        model = CustomUser
        fields = ('profile_image',)

    def save(self, *args, **kwargs):
        if self.instance.profile_image:
            self.instance.profile_image.delete()

        return super().save(*args, **kwargs)
