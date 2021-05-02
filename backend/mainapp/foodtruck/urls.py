from django.urls import path

from . import views


# WIRE UP FOODTRUCK
urlpatterns = [
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<uuid:uuid>', views.ProductDetailsAPIView.as_view()),
    path('', views.TruckListAPIView.as_view()),
    path('<uuid:uuid>', views.TruckDetailsAPIView.as_view()),
]
