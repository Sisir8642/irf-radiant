from django.urls import path
from .views import ContactView

urlpatterns = [
    path("contact/send/", ContactView.as_view(), name="contact-send"),
]