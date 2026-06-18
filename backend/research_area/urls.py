from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'Theme',ThemeViewset,basename='Theme')
router.register(r'PublicationType',PublicationTypeViewSet,basename='PublicationaType')
router.register(r'Publication',PublicattionViewset,basename='Publication')
router.register(r'Book',BookViewset,basename='Book')
router.register(r'GlobalCategory',GlobalCategoryViewset,basename='GlobalCategory')
router.register(r'GlobalPower',GlobalPowerViewset,basename='GlobalPower')
router.register(r'ResearchArtical',ResearchArticalViewset,basename='ResearchArtical')
urlpatterns = [
    path('',include(router.urls))
]
