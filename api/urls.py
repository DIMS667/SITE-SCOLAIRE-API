from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MessageContactViewSet
from .views import envoyer_email,react, EleveListView
router = DefaultRouter()
router.register(r'messages', MessageContactViewSet)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/', include(router.urls)),
    path('', react),
    path('api/envoyer_email/', envoyer_email, name='envoyer_email'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('eleves/', EleveListView.as_view(), name='eleve-list'),
    path('eleves/<int:pk>/', EleveListView.as_view(), name='eleve-update'),

]




