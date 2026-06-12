from django.contrib import admin
from.models import *

# Register your models here.
class SliderImageInline(admin.TabularInline):
    model= SliderImage
    extra= 1

@admin.register(Slider)
class Slider(admin.ModelAdmin):
    inlines = [SliderImageInline]
    list_display = ("title", "is_active")