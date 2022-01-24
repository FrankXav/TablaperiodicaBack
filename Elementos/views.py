from rest_framework import filters
from rest_framework import generics, status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render

from Elementos.models import elemento 

from .serializers import *

# Create your views here.

def index(request):
    return render(request, 'index.html')

def detail(request):
    return render(request, 'detail.html')

class CategoriaList(generics.ListAPIView):
    serializer_class = CategoriaSerializer
    
    def get_queryset(self):
        return self.get_serializer().Meta.model.objects

class ElementosList(generics.ListAPIView):
    serializer_class = ElementoSerializer
    
    def get_queryset(self):
        return self.get_serializer().Meta.model.objects

class ElementoCreate(generics.CreateAPIView):
    serializer_class = ElementoSerializer

    def post(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Elemento creado'}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class ElementoDetail(generics.RetrieveAPIView):
    serializer_class = ElementoSerializer
    lookup_field = 'nombre'
    
    def get_queryset(self):
        nombre = self.kwargs['nombre']
        return elemento.objects.filter(nombre=nombre)

class ElementoDelete(generics.DestroyAPIView):
    serializer_class = ElementoSerializer
    lookup_field = 'nombre'
    
    def get_queryset(self):
        nombre = self.kwargs['nombre']
        return elemento.objects.filter(nombre=nombre)

    def delete(self, request, nombre=None):
        Elemento = self.get_queryset()
        if Elemento:
            self.destroy(request, nombre)
            return Response({'message':'Elemento Eliminado'}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ElementoUpdate(generics.UpdateAPIView):
    serializer_class = ElementoSerializer
    lookup_field = 'nombre'

    def get_queryset(self, nombre):
        nombre = self.kwargs['nombre']
        return elemento.objects.filter(nombre=nombre).first()

    def patch(self, request, nombre=None):
        elemento = self.get_queryset(nombre)
        if elemento:
            elemento_serializer = self.serializer_class(elemento)
            return Response(data=elemento_serializer.data, status=status.HTTP_200_OK)
        return Response({'message':'No existe producto'}, status = status.HTTP_400_BAD_REQUEST)

    def put(self, request, nombre=None):
        if self.get_queryset(nombre):
            Elemento_serializer =self.serializer_class(self.get_queryset(nombre),data = request.data)
            if Elemento_serializer.is_valid():
                Elemento_serializer.save()
                return Response(Elemento_serializer.data, status=status.HTTP_200_OK)
            return Response(Elemento_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ElementoListFilter(generics.ListAPIView):

    queryset = elemento.objects.all()
    serializer_class = ElementoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['nombre','simbolo', 'no_atomico','categoria', 'grupo', 'periodo', "masa_atomica", "densidad"]


class CategoriaCreate(generics.CreateAPIView):
    serializer_class = CategoriaSerializer

    def post(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Categoria creada'}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    
class GrupoCreate(generics.CreateAPIView):
    serializer_class = GrupoSerializer

    def post(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Grupo creado'}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PeriodoCreate(generics.CreateAPIView):
    serializer_class = PeriodoSerializer

    def post(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Periodo creado'}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
