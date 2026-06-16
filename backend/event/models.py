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
    
class ProgramSchedule(models.Model):

    start_time = models.CharField(max_length=50)
    end_time = models.CharField(max_length=50)

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    moderator = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.title


class Session(models.Model):
   
    session_no = models.PositiveIntegerField()

    title = models.CharField(max_length=255)

    start_time = models.CharField(max_length=50)
    end_time = models.CharField(max_length=50)

    description = models.TextField()
    Panelists=models.TextField()
    moderator = models.CharField(max_length=255)

    class Meta:
        ordering = ["session_no"]

    def __str__(self):
        return self.title

class Video(models.Model):
     youtube_url = models.URLField()

     def __str__(self):
         return "video "


class OtherSite(models.Model):
    site1=models.URLField()
    

    def __str__(self):
        return self.site1




class Program(models.Model):
    STATUS_CHOICES = (
        ("current", "Current"),
        ("upcoming", "Upcoming"),
    )

    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to="programs/",blank=True,null=True)
    description = models.TextField(blank=True)
    objective = models.TextField(blank=True)
    participants = models.TextField(blank=True)
    expected_outcome = models.TextField(blank=True)
    date = models.CharField(max_length=100,blank=True,)
    status = models.CharField(choices=STATUS_CHOICES,default="upcoming")

    def __str__(self):
        return self.title