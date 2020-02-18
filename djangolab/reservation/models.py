from django.db import models

# Create your models here.
class Reservation(models.Model):
    username    = models.CharField(max_length=100)
    studentid   = models.IntegerField(blank=True, null=True)
    bookingtime = models.TextField(blank=True)
    date        = models.DateTimeField(auto_now=True)

    #add in  later

  

