from django.contrib import admin
from .models import HighlightSection, Session


class SessionInline(admin.TabularInline):
    model = Session
    extra = 1


@admin.register(HighlightSection)
class HighlightSectionAdmin(admin.ModelAdmin):
    list_display = ["title"]
    inlines = [SessionInline]


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "highlight",
        "order",
    ]