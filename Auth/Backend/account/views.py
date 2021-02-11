from django.shortcuts import render,redirect
from django.http import HttpResponse
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import StudentLoginSerializer
# Create your views here.
def home(request):
    return HttpResponse("home")

class StudentLoginView(generics.GenericAPIView,APIView):
    serializer_class = StudentLoginSerializer
    def get(self,request):
        serializer = self.serializer_class(data = request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.data)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def post(self,request):
        serializer = self.serializer_class(data = request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.data)
        return Response(serializer.data,status=status.HTTP_200_OK)