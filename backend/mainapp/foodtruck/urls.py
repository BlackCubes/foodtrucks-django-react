from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()


# ROUTE THE PATHS AND VIEWS
router.register(r'', views.TruckSerializer)
router.register(r'images', views.TruckImageSerializer)
router.register(r'products', views.ProductSerializer)


# WIRE UP FOODTRUCK API USING AUTOMATIC URL ROUTING
urlpatters = [
    path('', include('router.urls')),
]
