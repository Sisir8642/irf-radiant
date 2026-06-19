from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'slider',SliderViewSet,basename='slider')
router.register(r'gallery',GalleryViewSet,basename='gallery')

urlpatterns = [
   path('',include(router.urls)),
]
