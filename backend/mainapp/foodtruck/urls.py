from rest_framework import viewsets

from .models import Product, Truck, TruckImage
from .serializers import ProductSerializer, TruckSerializer, TruckImageSerializer


# TRUCK VIEWS
class APITruckViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet for Truck.

    Request Type: GET and POST.
    """
    queryset = Truck.objects.all().order_by('name')
    serializer_class = TruckSerializer


# TRUCKIMAGE VIEWS
# Find out about how to implement a MANY-TO-ONE situation
class APITruckImageViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet for TruckImage.

    Request Type: GET and POST.
    """
    queryset = TruckImage.objects.all().order_by('is_profile_image')
    serializer_class = TruckImageSerializer


# PRODUCT VIEWS
# Find out about how to implement a MANY-TO-ONE situation
class APIProductViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet for Product.

    Request Type: GET and POST.
    """
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer
