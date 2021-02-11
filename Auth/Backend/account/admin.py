from django.contrib import admin
from account.models import User
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm,CustomUserCreationForm
# Register your models here.
class myUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display=('username','email','date_joined','last_login','is_admin','is_management')
    search_fields=('username','email')
    readonly_fields=('date_joined','last_login')
    ordering=('email',)
    filter_horizontal=()
    list_filter=('email','is_staff','is_active','is_management',)
    fieldsets=(
        (None,{'fields':('email','username','password','is_management')}),
        ('Permission',{'fields':('is_staff','is_active')}),
    )
    add_fieldsets = (
        (None,{
            'classes':('wide',),
            'fields':('email','username','password1','password2','is_management','is_staff','is_active')
        }),
    )

admin.site.register(User,myUserAdmin)
