from django.db import models

# Create your models here.

class CompanyMission(models.Model):
    mission=models.TextField()
    vision=models.TextField()


    def __str__(self):
        return "Mission and Vision"


class RecentAchievement(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField()

    def __str__(self):
        return self.title