from django.urls import path

from . import views


# WIRE UP FOODTRUCK
urlpatterns = [
    path('products/', views.ProductListCreateAPIView.as_view()),
    path('products/<uuid:uuid>', views.ProductDetailsAPIView.as_view()),
    path('images/', views.TruckImageListCreateAPIView.as_view()),
    path('images/<uuid:uuid>', views.TruckImageDetailsAPIView.as_view()),
    path('', views.ProductListCreateAPIView.as_view()),
    path('<uuid:uuid>', views.ProductDetailsAPIView.as_view()),
]
