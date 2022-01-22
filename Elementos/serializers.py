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
            'nombre': instance.nombre,
            'simbolo': instance.simbolo,
            'no_atomico': instance.no_atomico,
            'periodo': instance.periodo.no_periodo,
            'grupo': instance.grupo.no_grupo,
            'masa_atomica': instance.masa_atomica,
            'densidad': instance.densidad,
            'categoria': instance.categoria.categoria,
            #'Creado_por': instance.Creado_por.Nickname,
            'informacion': instance.informacion

        }