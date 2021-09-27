from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    fav_source_control = models.CharField(max_length=120)
    team_size = models.IntegerField()

    def _str_(self):
        return self.name