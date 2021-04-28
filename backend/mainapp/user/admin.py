from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

# Register your models here.


class CustomUserAdmin(UserAdmin):
    """
    Subclassing UserAdmin to use the forms of CustomUserCreationForm and CustomUserChangeForm
    """
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

    list_display = ('name', 'email', 'is_staff', 'is_active',)
    list_filter = ('name', 'email', 'is_staff', 'is_active',)

    fieldsets = (
        (None, {'fields': ('name', 'email', 'password')}),
        ('Profile Image', {'fields', ('profile_image')})
        ('Permissions', {'fields', ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'email', 'password1', 'password2', 'is_staff', 'is_active')
        }),
    )

    readonly_fields = ('uuid', 'last_login', 'date_joined', 'password_changed',
                       'password_reset_token', 'password_reset_expires')

    search_fields = ('email', 'email',)
    ordering = ('email', 'name',)


admin.site.register(CustomUser, CustomUserAdmin)
