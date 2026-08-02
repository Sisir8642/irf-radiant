from django.urls import path
from .views import HighlightSectionAPIView

urlpatterns = [
    path(
        "highlight/", HighlightSectionAPIView.as_view(), name="highlight-section",
    ),
]