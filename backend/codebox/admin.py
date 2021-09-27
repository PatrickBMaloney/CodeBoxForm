from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'fav_source_control', 'team_size')

# Register your models here.

admin.site.register(User, UserAdmin)
