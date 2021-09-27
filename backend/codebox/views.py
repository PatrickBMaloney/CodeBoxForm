# from django.shortcuts import render
# from rest_framework.decorators import api_view
# from rest_framework import viewsets, generics, status
# from rest_framework.response import Response
# from .serializers import UserSerializer
# from django.core.mail import send_mail
# from .models import User
# from rest_framework.views import APIView

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
