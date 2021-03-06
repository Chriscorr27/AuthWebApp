from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from rest_framework_simplejwt.tokens import RefreshToken

# Create your models here.

class UserManger(BaseUserManager):
    def create_user(self,email,username,is_management,password=None):
        if not email:
            raise ValueError("User must contain Email")
        if not username:
            raise ValueError("User must contain Username")

        user = self.model(
            email=self.normalize_email(email),
            username = username,
            is_management=is_management,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,username,is_management,password):
       
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username = username,
            is_management=is_management,
        )
        user.is_admin=True
        user.is_staff=True
        user.is_superuser=True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser,PermissionsMixin):
    
    username       = models.CharField(verbose_name="username",max_length=255)
    email          = models.EmailField(verbose_name="email",max_length=255,unique=True)
    date_joined    = models.DateTimeField(verbose_name="date join",auto_now_add=True)
    last_login     = models.DateTimeField(verbose_name="last login",auto_now=True)
    is_admin       = models.BooleanField(default=False) 
    is_active      = models.BooleanField(default=True) 
    is_staff       = models.BooleanField(default=False) 
    is_superuser   = models.BooleanField(default=False)
    is_management  = models.BooleanField(default=False)
    USERNAME_FIELD   = 'email' 
    REQUIRED_FIELDS  = ['username','is_management']

    objects = UserManger()
    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True
    @property
    def tokens(self):
        refresh = RefreshToken.for_user(self)

        return{
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
