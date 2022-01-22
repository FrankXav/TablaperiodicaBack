from informacion import LiEle


ListaElementos=LiEle()

"""cat = []
nom = []"""

for i in ListaElementos:

    i.CorNombre()

    i.CorMasa_Atomica()

    i.CorDensidad()

    i.CorInformacion()

    i.CorCategoria()

    """if i.Categoria not in cat:
                    cat.append(i.Categoria)
                    nom.append(i.Nombre)"""

    #i.Imprimir_Info()


"""print(cat)
print(nom)"""

"""for i in ListaElementos:
    i.Imprimir_Info()"""

for i in ListaElementos:
    print(f'Elemento {i.Nombre}')
    print('{')
    print(f'    "nombre": "{i.Nombre}",')
    print(f'    "simbolo": "{i.Simbolo}",')
    print(f'    "no_atomico": {i.Numero_Atomico},')
    print(f'    "masa_atomica": {i.Masa_Atomica},')
    print(f'    "densidad": {i.Densidad},')
    print(f'    "informacion": "{i.Informacion}",')
    print(f'    "periodo": {i.Periodo},')
    print(f'    "grupo": {i.Grupo},')
    print(f'    "categoria": {i.Categoria}')
    print('}')


