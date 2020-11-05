from django.db import models


class SurfSpots(models.Model):
    name = models.CharField(max_length=50)
    shore = models.CharField(max_length=5)
    lat = models.FloatField
    long = models.FloatField
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now_add=True)

    def get_coords(self):
        return {
            lat: self.lat,
            long: self.long
        }

    def update_updated_on(self, newDate):
        self.updated_on = newDate
        self.save(['updated_on'])
