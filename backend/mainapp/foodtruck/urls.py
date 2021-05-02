from django.urls import path

from . import views


# WIRE UP FOODTRUCK
urlpatterns = [
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<slug:slug>', views.ProductDetailsAPIView.as_view()),
    path('', views.TruckListAPIView.as_view()),
    path('<slug:slug>', views.TruckDetailsAPIView.as_view()),
]
