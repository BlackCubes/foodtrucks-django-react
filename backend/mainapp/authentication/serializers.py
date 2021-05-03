from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from user.models import CustomUser


# Registration
class RegisterSerializer(serializers.ModelSerializer):
    """
    Model Serializer on CustomUser Model. Registers the new user.

    Fields: name, email, password, and password2.
    """
    name = serializers.CharField(required=True, min_length=2, max_length=70)
    email = serializers.EmailField(required=True, validators=[
                                   UniqueValidator(queryset=CustomUser.objects.all())])
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('name', 'email', 'password', 'password2',)

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError(
                {'password': 'Password fields did not match.'})

        return data

    def create(self, validated_data):
        user = CustomUser.objects.create(
            name=validated_data['name'], email=validated_data['email'])

        user.set_password(validated_data['password'])
        user.save()

        return user


# CHANGE PASSWORD
class ChangePasswordSerializer(serializers.ModelSerializer):
    """
    Model Serializer on CustomUser model. Changes the user's password.

    Fields: old_password, password, and password2.
    """
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('old_password', 'password', 'password2',)

    def validate(self, data):
        """
        Checks to see if password and password2 are the same.
        """
        if not data['password']:
            raise serializers.ValidationError(
                {'password': 'New password field is required.'})
        elif not data['password2']:
            raise serializers.ValidationError(
                {'password2': 'Confirming new password is required.'})
        elif data['password'] != data['password2']:
            raise serializers.ValidationError(
                {'password': 'Password fields did not match.'})

        return data

    def validate_old_password(self, value):
        """
        Checks to see if old_password is correct.
        """
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError(
                {'old_password': 'Old password is not correct.'})

        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.uuid != instance.uuid:
            raise serializers.ValidationError(
                {'authorize': 'You do not have permission for this user.'})

        instance.set_password(validated_data['password'])
        instance.save()

        return instance
