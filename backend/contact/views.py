from django.conf import settings
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactSerializer


class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():

            first_name = serializer.validated_data["first_name"]
            last_name = serializer.validated_data.get("last_name", "")
            email = serializer.validated_data["email"]
            subject = serializer.validated_data.get(
                "subject",
                "New Contact Form Submission"
            )
            message = serializer.validated_data["message"]

            email_body = f"""
New Contact Form Submission

Name: {first_name} {last_name}
Email: {email}

Subject: {subject}

Message:
{message}
"""

            try:
                send_mail(
                    subject=f"Contact Form: {subject}",
                    message=email_body,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )

                return Response(
                    {
                        "success": True,
                        "message": "Message sent successfully."
                    },
                    status=status.HTTP_200_OK
                )

            except Exception as e:
                return Response(
                    {
                        "success": False,
                        "error": str(e)
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )