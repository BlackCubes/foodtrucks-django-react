from django.forms import ModelForm

from .models import Product, Truck, Truck_Image

# TRUCK MODAL FORM


class TruckModalForm(ModelForm):
    """
    Modal Form class for Truck with fields of name, info, phone_number, email, and website.
    """
    class Meta:
        model = Truck
        fields = ('name', 'info', 'phone_number', 'email', 'website',)


# TRUCK_IMAGE MODAL FORM
class TruckImageModalForm(ModelForm):
    """
    Modal Form class for Truck_Image with field of image.
    """
    class Meta:
        modal = Truck_Image
        fields = ('image',)


# PRODUCT MODAL FORM
class ProductModalForm(ModelForm):
    """
    Modal Form class for Product with fields of name, info, image, price, quantity, is_available, and truck.
    """
    class Meta:
        modal = Product
        fields = ('name', 'info', 'image', 'price',
                  'quantity', 'is_available',)
