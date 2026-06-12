from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *


router=DefaultRouter()
router.register(r'Mission',CompanyMissionViewSet,basename='Mission'),
router.register(r'RecentAchievement',ReacentAchievementViewSet,basename='RecentAchievement')


urlpatterns = [
    path('',include(router.urls))
]
