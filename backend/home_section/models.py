from django.db import models


class HighlightSection(models.Model):
    title = models.CharField(max_length=255)
    tagline = models.CharField(max_length=255)
    description = models.TextField()

    button_text = models.CharField(
        max_length=100,
        default="View Event Page"
    )

    button_url = models.URLField(blank=True)

    slide_image_1 = models.ImageField(upload_to="highlights/")
    slide_image_2 = models.ImageField(upload_to="highlights/")
    slide_image_3 = models.ImageField(upload_to="highlights/")

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Highlight Section"

    def __str__(self):
        return self.title


class Session(models.Model):
    highlight = models.ForeignKey(
        HighlightSection,
        on_delete=models.CASCADE,
        related_name="sessions"
    )

    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    image = models.ImageField(upload_to="sessions/")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title