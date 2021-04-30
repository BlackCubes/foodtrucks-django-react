from django.contrib import admin

from .models import Product, Truck, TruckImage

# Register your models here.


# PRODUCT INLINE
class ProductInline(admin.TabularInline):
    """
    TabularInline for Product.

    Fieldsets: name, slug, info, image, price, quantity, and is_available.

    Read Only: created_at.
    """
    model = Product

    fieldsets = (
        (None, {'fields': ('name', 'slug', 'info',)}),
        ('Product Image', {'fields': ('image',)}),
        ('Miscellaneous', {'fields': ('price', 'quantity', 'is_available',)}),
    )

    readonly_fields = ('created_at',)


# TRUCKIMAGE INLINE
class TruckImageInline(admin.TabularInline):
    """
    TabularInline for TruckImage.

    Fieldsets: image and is_profile_image.

    Read Only: created_at and updated_at.
    """
    model = TruckImage

    fieldsets = (
        (None, {'fields': ('image', 'is_profile_image',)}),
    )

    readonly_fields = ('created_at', 'updated_at',)


# TRUCK ADMIN
class TruckAdmin(admin.ModelAdmin):
    """
    Admin Form for Truck.

    List Filter: name and email.

    Fieldsets: name, slug, info, phone_number, email, and website.

    Read Only: uuid, created_at, and updated_at.

    Search Fields: name and email.

    Inlines: TruckImageInline and ProductInline.
    """
    list_filter = ('name', 'email',)

    fieldsets = (
        (None, {'fields': ('name', 'slug', 'info',)}),
        ('Contact', {'fields': ('phone_number', 'email', 'website',)}),
    )

    readonly_fields = ('uuid', 'created_at', 'updated_at',)

    search_fields = ('name', 'email',)

    inlines = (TruckImageInline, ProductInline,)


# LIKE INLINE
class LikeInline(admin.TabularInline):
    """
    TabularInline for Like.

    Fieldsets: like.

    Read Only: created_at and emoji.
    """
    model = 'social.Like'

    fieldsets = (
        (None, {'fields': ('like',)}),
    )

    readonly_fields = ('created_at', 'emoji')


# REVIEW INLINE
class ReviewInline(admin.TabularInline):
    """
    TabularInline for Review.

    Fieldsets: review.

    Read Only: created_at.
    """
    model = 'review.Review'

    fieldsets = (
        (None, {'fields': ('review',)}),
    )

    readonly_fields = ('created_at',)


# PRODUCT ADMIN
class ProductAdmin(admin.ModelAdmin):
    """
    Admin Form for Product.

    List Filter: name, price, and is_available.

    Fieldsets: name, slug, info, image, price, quantity, is_available, and truck.

    Read Only: uuid, created_at, and updated_at.

    Search Fields: name.
    """
    list_filter = ('name', 'price', 'is_available',)

    fieldsets = (
        (None, {'fields': ('name', 'slug', 'info',)}),
        ('Product Image', {'fields': ('image',)}),
        ('Miscellaneous', {'fields': ('price', 'quantity', 'is_available',)}),
        ('Truck Ownership', {'fields': ('truck',)}),
    )

    readonly_fields = ('uuid', 'created_at', 'updated_at',)

    search_fields = ('name',)

    inline = (LikeInline, ReviewInline,)


admin.site.register(Truck, TruckAdmin)
admin.site.register(Product, ProductAdmin)
