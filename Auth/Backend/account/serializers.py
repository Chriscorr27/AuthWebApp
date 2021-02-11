from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
import jsonfield

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    tokens = serializers.CharField(max_length=68,min_length=6,read_only=True)
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','email','username','is_management','password','tokens')


class StudentLoginSerializer(serializers.ModelSerializer):
    email           = serializers.EmailField(max_length=255,min_length=3)
    password        = serializers.CharField(max_length=68,min_length=6,write_only=True)
    username        = serializers.CharField(max_length = 255,read_only=True)
    is_management   = serializers.BooleanField(read_only=True)
    tokens          = jsonfield.JSONField()
    class Meta:
        model = User
        fields = ['email','password','username','tokens','is_management']


    def validate(self,attrs):
        email = attrs.get('email','')
        password = attrs.get('password','')

        user = auth.authenticate(email=email,password=password)

        if not user :
            raise AuthenticationFailed('Invalid Credentials , try again')
        if not user.is_active :
            raise AuthenticationFailed('User is not active')
        if user.is_management :
            raise AuthenticationFailed('You are not a student , please check')
        print(user.tokens)
        return {
            'email':user.email,
            'username':user.username,
            'is_management':user.is_management,
            'token':user.tokens
        }


