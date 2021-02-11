from django import forms
from django.contrib.auth.forms import UserCreationForm , UserChangeForm
from .models import User
class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(max_length=255,help_text='Required. Add a valid email address')
    class meta(UserCreationForm) :
        model = User
        fields = ('email',)

class CustomUserChangeForm(UserChangeForm):
    email = forms.EmailField(max_length=255,help_text='Required. Add a valid email address')
    class meta :
        model = User
        fields = ('email',)
