# Generated by Django 5.1.3 on 2024-12-04 12:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eleve',
            name='classe',
        ),
        migrations.DeleteModel(
            name='Infrastructure',
        ),
        migrations.DeleteModel(
            name='ResultatExamen',
        ),
        migrations.DeleteModel(
            name='Classe',
        ),
        migrations.DeleteModel(
            name='Eleve',
        ),
    ]
