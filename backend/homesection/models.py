from django.db import models

# Create your models here.
class Slider(models.Model):
    title=models.CharField(max_length=250)
    description=models.TextField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class SliderImage(models.Model):
    slider = models.ForeignKey(Slider, on_delete=models.CASCADE, related_name="images")
    image=models.ImageField(upload_to='slider_image/')

class Gallery(models.Model):
    image=models.ImageField(upload_to="gallery")

    def __str__(self):
        return "Gallery image"