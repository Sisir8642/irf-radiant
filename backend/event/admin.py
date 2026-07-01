from django.contrib import admin
from .models import *

class ProgramHighlightInline(admin.TabularInline):
    model = ProgramHighlight
    extra = 1
    
# Register your models here.
admin.site.register(Dialogue)
admin.site.register(Session)
admin.site.register(ProgramSchedule)
admin.site.register(Video)
admin.site.register(OtherSite)
@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    inlines = [ProgramHighlightInline]