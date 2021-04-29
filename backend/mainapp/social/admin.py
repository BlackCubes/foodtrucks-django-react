from django.contrib import admin

from .forms import EmojiModalForm, LikeModalForm
from .models import Emoji, Like

# Register your models here.


# LIKE INLINE
class LikeInline(admin.TabularInline):
    """
    TabularInline for Like. Fieldsets: like. Read Only: created_at and product.
    """
    model = Like

    fieldsets = (
        (None, {'fields': ('like',)}),
    )

    readonly_fields = ('created_at', 'product',)


# EMOJI ADMIN
class EmojiAdmin(admin.ModelAdmin):
    """
    Admin Form for Emoji. List Filter: emoji and name. Fieldsets: emoji and name. Read Only: uuid, created_at, and updated_at. Search Fields: emoji and name. Inlines: LikeInline.
    """
    list_filter = ('emoji', 'name',)

    fieldsets = (
        (None, {'fields': ('emoji', 'name',)}),
    )

    readonly_fields = ('uuid', 'created_at', 'updated_at',)

    search_fields = ('emoji', 'name',)

    inlines = (LikeInline,)


# LIKE ADMIN
class LikeAdmin(admin.ModelAdmin):
    """
    Admin Form for Like. List Filter: like. Fieldsets: like, emoji, and product. Read Only: uuid, created_at, and updated_at.
    """
    list_filter = ('like',)

    fieldsets = (
        (None, {'fields': ('like',)}),
        ('Emoji', {'fields': ('emoji',)}),
        ('Product', {'fields': ('product',)}),
    )

    readonly_fields = ('uuid', 'created_at', 'updated_at',)


admin.site.register(Emoji, EmojiAdmin)
admin.site.register(Like, LikeAdmin)
