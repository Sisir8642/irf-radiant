from rest_framework.views import APIView
from rest_framework.response import Response

from .models import HighlightSection
from .serializers import HighlightSectionSerializer


class HighlightSectionAPIView(APIView):

    def get(self, request):

        highlight = HighlightSection.objects.prefetch_related(
            "sessions"
        ).first()

        serializer = HighlightSectionSerializer(
            highlight,
            context={"request": request}
        )

        return Response(serializer.data)