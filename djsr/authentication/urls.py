from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithEmailView

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithEmailView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
