from django.db import models



class MessageContact(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_envoye = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom} - {self.email}"


class Eleve(models.Model):
    nom = models.CharField(max_length=255)
    matricule = models.CharField(max_length=255, unique=True)
    classe= models.CharField(max_length=255, unique=True)
    matiere = models.CharField(max_length=255)
    note = models.DecimalField(max_digits=5, decimal_places=2)
