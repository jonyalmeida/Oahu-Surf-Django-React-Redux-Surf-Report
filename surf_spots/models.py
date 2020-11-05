from django.db import models
from django.contrib.auth.models import User


class SurfSpots(models.Model):
    name = models.CharField(max_length=50)
    shore = models.CharField(max_length=5)
    lat = models.FloatField(default=0.00000)
    long = models.FloatField(default=0.00000)
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{(self.name)}'

    def get_coords(self):
        return {
            lat: self.lat,
            long: self.long
        }

    def update_updated_on(self, newDate):
        self.updated_on = newDate
        self.save(['updated_on'])


class FavoriteSpots(models.Model):
    user = models.ForeignKey(
        User, related_name='favorite_spots', null=False, on_delete=models.CASCADE)
    surf_spot = models.ForeignKey(
        SurfSpots, null=False, on_delete=models.CASCADE)
