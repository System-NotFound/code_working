from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .serializers import UserSerializer

@api_view(['POST'])
def login_view(request):
    print("hi")
    email = request.data.get('email')
    password = request.data.get('password')
    
    print(email)
    user = authenticate(email=email, password=password)
    if user:
        login(request, user)
        return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)
    return Response({"message": "Invalid credentials!"}, status=status.HTTP_400_BAD_REQUEST)
