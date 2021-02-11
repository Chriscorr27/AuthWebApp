"""Auth URL Configuration

"""

from django.urls import path,include
from .views import *
urlpatterns = [
     path('',home,name="home"),
     path('login/',StudentLoginView.as_view(),name='Student_Login'),
]
