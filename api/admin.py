from django.contrib import admin
from .models import MessageContact, Eleve

@admin.register(MessageContact)
class MessageContactAdmin(admin.ModelAdmin):
    list_display = ('nom', 'email', 'date_envoye')
    list_filter = ('date_envoye',)
    search_fields = ('nom', 'email', 'message')

@admin.register(Eleve)
class EleveAdmin(admin.ModelAdmin):
    # Champs affichés dans la liste des élèves
    list_display = ('nom', 'matricule', 'classe', 'matiere', 'note')
    
    # Champs cliquables (qui ouvrent le formulaire de modification)
    list_display_links = ('nom', 'matricule')
    
    # Champs pour rechercher un élève
    search_fields = ('nom', 'matricule', 'classe', 'matiere')
    
    # Filtres disponibles dans l'interface admin
    list_filter = ('classe', 'matiere')
    
    # Champs éditables directement dans la liste
    list_editable = ('note',)
    
    # Organisation des champs dans le formulaire d'ajout/modification
    fieldsets = (
        ("Informations Générales", {
            'fields': ('nom', 'matricule', 'classe')
        }),
        ("Détails", {
            'fields': ('matiere', 'note')
        }),
    )