from django.contrib import admin
from .models import *


# Register your models here.

admin.site.register(user)
admin.site.register(grupo)
admin.site.register(periodo)
admin.site.register(categoria)
admin.site.register(elemento)


"""
    name: admin
    correo: correo@gmail.com
    contraseña: contraseña123
"""