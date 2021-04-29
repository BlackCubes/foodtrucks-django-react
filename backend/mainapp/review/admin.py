from django.contrib import admin

from .forms import ReviewModelForm
from .models import Review

# Register your models here.


# REVIEW ADMIN
class ReviewAdmin(admin.ModelAdmin):
    """
    Admin Form for Review. Fieldsets: review, product, and user. Read Only: uuid, created_at, and updated_at.
    """
    fieldsets = (
        (None, {'fields': ('review',)}),
        ('Product', {'fields': ('product',)}),
        ('User', {'fields': ('user',)}),
    )

    readonly_fields = ('uuid', 'created_at', 'updated_at',)


admin.site.register(Review, ReviewAdmin)
