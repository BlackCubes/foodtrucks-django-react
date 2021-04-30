from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()


# ROUTE THE PATHS AND VIEWS
router.register(r'', views.APITruckViewSet)
router.register(r'images', views.APITruckImageViewSet)
router.register(r'products', views.APIProductViewSet)


# WIRE UP FOODTRUCK API USING AUTOMATIC URL ROUTING
urlpatterns = [
    path('', include('router.urls')),
]
