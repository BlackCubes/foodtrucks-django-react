from django.urls import path

from . import views


# WIRE UP SOCIAL
urlpatterns = [
    path('likes/', views.LikeListCreateAPIView.as_view()),
    path('likes/<uuid:uuid>', views.LikeDetailsAPIView.as_view()),
    path('emojis/', views.EmojiListAPIView.as_view()),
    path('emojis/<uuid:uuid>', views.EmojiDetailsAPIView.as_view()),
]
