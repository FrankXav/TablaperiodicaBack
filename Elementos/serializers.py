from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = categoria
        fields = '__all__'

class GrupoSerializer(serializers.ModelSerializer):

    class Meta:
        model = grupo
        fields = '__all__'

class PeriodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = periodo
        fields = '__all__'

class ElementoSerializer(serializers.ModelSerializer):
    """ Grupo = GrupoSerializer()
    Periodo = PeriodoSerializer()
    Categoria = CategoriaSerializer()
    Creado_por = UserSerializer() """

    class Meta:
        model = elemento
        exclude = ('creado_por',)

    def to_representation(self, instance):
        return {
            'id':instance.id,
            'Nombre': instance.nombre,
            'Simbolo': instance.simbolo,
            'No_Atomico': instance.no_atomico,
            'Periodo': instance.periodo.no_periodo,
            'Grupo': instance.grupo.no_grupo,
            'Masa_Atomica': instance.masa_atomica,
            'Densidad': instance.densidad,
            'Categoria': instance.categoria.categoria,
            #'Creado_por': instance.Creado_por.Nickname,
            'Informacion': instance.informacion

        }