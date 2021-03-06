from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    """
    Subclassing UserCreationForm to use the new CustomUser model with fields of name and email.
    """
    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('name', 'email',)


class CustomUserChangeForm(UserChangeForm):
    """
    Subclassing UserChangeForm to use the new CustomUser model with fields of name and email.
    """
    class Meta:
        model = CustomUser
        fields = ('name', 'email',)
