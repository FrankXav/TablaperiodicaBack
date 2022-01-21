from django.db import models

# Create your models here.

class user(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    apellido = models.CharField(max_length=100, blank=False, null=True)
    nickname = models.CharField(max_length=50, blank=False, null=False, unique=True)
    correo = models.EmailField(unique=True)

    def __str__(self):
        return self.nickname

class categoria(models.Model):
    categoria = models.CharField(max_length=50, blank=False, null=False, unique=True)

    def __str__(self):
        return self.categoria

class periodo(models.Model):
    no_periodo = models.IntegerField(unique=True,blank=False, null=False)

    def __str__(self):
        return str(self.no_periodo)

class grupo(models.Model):
    no_grupo = models.IntegerField(unique=True,blank=False, null=False)

    def __str__(self):
        return str(self.no_grupo)

class elemento(models.Model):
    nombre = models.CharField(max_length=50,blank=False, null=False, unique=True)
    simbolo = models.CharField(max_length=3, blank=False, null=False, unique=True)
    no_atomico = models.IntegerField(blank=False, null=False, unique=True)
    periodo = models.ForeignKey(periodo, on_delete=models.CASCADE, blank=False, null=False)
    grupo = models.ForeignKey(grupo, on_delete=models.CASCADE, blank=False, null=False)
    masa_atomica = models.FloatField(blank=False, null=False)
    densidad = models.FloatField(blank=False, null=False)
    categoria = models.ForeignKey(categoria, on_delete=models.CASCADE, blank=False, null=False)
    creado_por = models.ForeignKey(user, on_delete=models.CASCADE, blank=True, null=True)
    informacion = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.nombre