from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import MessageContact



# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import MessageContact
from .serializers import MessageContactSerializer


class MessageContactViewSet(ModelViewSet):
    queryset = MessageContact.objects.all()
    serializer_class = MessageContactSerializer



def react(request):
    """
    Vue qui sert le fichier`index.html` de React.
    """
    return render(request, 'index.html')

@csrf_exempt
def envoyer_email(request):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)
            nom = data.get('nom')      
            email = data.get('email')  
            message = data.get('message')  

            
            if not nom or not email or not message:
                return JsonResponse({'error': 'Tous les champs sont obligatoires.'}, status=400)
            nouveau_message = MessageContact.objects.create(
                nom=nom,
                email=email,
                message=message
            )

            
            contenu_email = f"Nom : {nom}\nEmail : {email}\n\nMessage :\n{message}"
            from django.core.mail import send_mail
            send_mail(
                'Contact depuis le site',
                contenu_email,
                'tonyenwalal@gmail.com',
                ['tonyenwalal@gmail.com'],  
                fail_silently=False,
            )

            return JsonResponse({'message': 'Votre message a été envoyé avec succès.'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Méthode non autorisée.'}, status=405)






from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from .models import Eleve
from .serializers import EleveSerializer

class EleveListView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        eleves = Eleve.objects.all()
        serializer = EleveSerializer(eleves, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            eleve = Eleve.objects.get(pk=pk)
            serializer = EleveSerializer(eleve, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Eleve.DoesNotExist:
            return Response({'error': 'Élève introuvable'}, status=status.HTTP_404_NOT_FOUND)
