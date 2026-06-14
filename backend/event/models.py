from django.db import models

# Create your models here.


class Dialogue(models.Model):
    image=models.ImageField(upload_to='dialogue_image/')
    date=models.DateField(null=True,blank=True)
    title=models.CharField(max_length=150)
    venue=models.CharField(max_length=250,null=True,blank=True)
    organized_by=models.CharField(max_length=250,null=True,blank=True)
    chairperson=models.CharField(max_length=250)
    description=models.TextField()
    chief_guest=models.CharField(max_length=250,null=True,blank=True)

    def __str__(self):
        return self.title
