from rest_framework import serializers
from .models import  MessageContact
from .models import Eleve


class MessageContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageContact
        fields = '__all__'


class EleveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleve
        fields = '__all__'
