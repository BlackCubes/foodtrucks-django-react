from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()


# ROUTE THE PATHS AND VIEWS
router.register(r'foodtrucks', views.TruckSerializer)
router.register(r'foodtrucks/images', views.TruckImageSerializer)
router.register(r'foodtrucks/products', views.ProductSerializer)


# WIRE UP FOODTRUCK API USING AUTOMATIC URL ROUTING
urlpatters = [
    path('', include('router.urls')),
]
