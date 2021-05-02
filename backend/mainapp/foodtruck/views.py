from rest_framework import generics

from .models import Product, Truck
from .serializers import ProductSerializer, TruckSerializer


# TRUCK VIEWS
class TruckListAPIView(generics.ListAPIView):
    """
    API view for Truck to retrieve lists.

    Request Type: GET.
    """
    queryset = Truck.objects.all().order_by('name')
    serializer_class = TruckSerializer


class TruckDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for Truck to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    queryset = Truck.objects.all().order_by('name')
    lookup_field = 'uuid'
    serializer_class = TruckSerializer


# PRODUCT VIEWS
class ProductListAPIView(generics.ListAPIView):
    """
    API view for Product to retrieve lists.

    Request Type: GET.
    """
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer


class ProductDetailsAPIView(generics.RetrieveAPIView):
    """
    API view for Product to retrieve.

    LookUp Field: uuid.

    Request Type: GET.
    """
    queryset = Product.objects.all().order_by('name')
    lookup_field = 'uuid'
    serializer_class = ProductSerializer
