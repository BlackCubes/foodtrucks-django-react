from django.forms import ModelForm

from .models import Product, Truck, Truck_Image


# TRUCK MODAL FORM
class TruckModelForm(ModelForm):
    """
    Modal Form class for Truck with fields of name, info, phone_number, email, and website.
    """
    class Meta:
        model = Truck
        fields = ('name', 'info', 'phone_number', 'email', 'website',)


# TRUCK_IMAGE MODAL FORM
class Truck_ImageModelForm(ModelForm):
    """
    Modal Form class for Truck_Image with field of image.
    """
    class Meta:
        model = Truck_Image
        fields = ('image',)


# PRODUCT MODAL FORM
class ProductModelForm(ModelForm):
    """
    Modal Form class for Product with fields of name, info, image, price, quantity, is_available, and truck.
    """
    class Meta:
        model = Product
        fields = ('name', 'info', 'image', 'price',
                  'quantity', 'is_available',)
