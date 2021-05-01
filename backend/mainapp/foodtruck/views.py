from rest_framework import generics

from .models import Product, Truck, TruckImage
from .serializers import ProductSerializer, TruckSerializer, TruckImageSerializer


# TRUCK VIEWS
class TruckListCreateAPIView(generics.ListCreateAPIView):
    """
    API view for Truck to retrieve lists or create new.

    Request Type: GET and POST.
    """
    queryset = Truck.objects.all().order_by('name')
    serializer_class = TruckSerializer


class TruckDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view for Truck to retrieve, update, or delete.

    LookUp Field: uuid.

    Request Type: GET, PUT, PATCH, and DELETE.
    """
    queryset = Truck.objects.all().order_by('name')
    lookup_field = 'uuid'
    serializer_class = TruckSerializer


# TRUCKIMAGE VIEWS
# Find out about how to implement a MANY-TO-ONE situation
class TruckImageListCreateAPIView(generics.ListCreateAPIView):
    """
    API view for TruckImage to retrieve lists or create new.

    Request Type: GET and POST.
    """
    queryset = TruckImage.objects.all().order_by('is_profile_image')
    serializer_class = TruckImageSerializer


class TruckImageDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view for TruckImage to retrieve, update or delete.

    LookUp Field: uuid.

    Request Type: GET, PUT, PATCH, and DELETE.
    """
    queryset = TruckImage.objects.all().order_by('is_profile_image')
    lookup_field = 'uuid'
    serializer_class = TruckImageSerializer


# PRODUCT VIEWS
# Find out about how to implement a MANY-TO-ONE situation
class ProductListCreateAPIView(generics.ListCreateAPIView):
    """
    API view for Product to retrieve lists or create new.

    Request Type: GET and POST.
    """
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer


class ProductDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view for Product to retrieve, update or delete.

    LookUp Field: uuid.

    Request Type: GET, PUT, PATCH, and DELETE.
    """
    queryset = Product.objects.all().order_by('name')
    lookup_field = 'uuid'
    serializer_class = ProductSerializer
