from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'dialouge',DiaglougeViewset,basename="dialogue")
router.register(r'session',SessionViewset,basename='session')
router.register(r'programschedule',ProgramScheduleViewset,basename='programschedule')
router.register(r'video',VideoViewset,basename='video')
router.register(r'othersite',OtherSiteViewset,basename='othersite')
router.register(r'program',ProgramViewset,basename='program')

urlpatterns = [
    path("",include(router.urls))
]
