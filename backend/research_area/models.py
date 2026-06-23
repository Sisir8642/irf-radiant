from django.db import models


class Theme(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    def __str__(self):
        return self.name


class PublicationType(models.Model):
    category=models.CharField(max_length=150)
    def __str__(self):
        return self.category
    
class Publication(models.Model):
    title = models.CharField(max_length=255)
    category=models.ForeignKey(PublicationType,on_delete=models.CASCADE)
    excerpt = models.TextField()
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE, related_name="publications")
    date = models.DateField()
    pdf = models.FileField(upload_to="publications/pdfs/",blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title


class Book(models.Model):
    title= models.CharField(max_length=255)
    book_cover=models.ImageField(upload_to='books/image',blank=True,null=True)
    book=models.FileField(upload_to="books/pdf",blank=True,null=True)
    author = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    

class GlobalCategory(models.Model):
    category=models.CharField(max_length=250)

    def __str__(self):
        return self.category
    

class GloabalPower(models.Model):
    category=models.ForeignKey(GlobalCategory,on_delete=models.CASCADE)
    title=models.CharField(max_length=250)
    description=models.TextField(null=True,blank=True)
    pdf=models.FileField(upload_to='global/',blank=True,null=True) 

    def __str__(self):
        return self.title

class ResearchArtical(models.Model):
    Cover_image=models.ImageField(upload_to='resarch/image')
    title=models.CharField(max_length=250)
    description=models.TextField(blank=True,null=True)
    file=models.FileField(upload_to='Artical/file',blank=True,null=True)

    def __str__(self):
        return self.title

