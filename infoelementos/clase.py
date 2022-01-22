class Elemento:
    Nombre="Nombre elemento"
    Simbolo="Simbolo"
    Numero_Atomico="Numero Atomico"
    Periodo="Periodo"
    Grupo="Grupo"
    Masa_Atomica="Masa Atomica"
    Densidad="Densidad elemento"
    Categoria="Categoria"
    Informacion="Informacion del elemento"

    def __init__(self,Nombre,Simbolo,Numero_Atomico,Masa_Atomica,Periodo,Grupo,Densidad,Categoria,Informacion):
        self.Nombre=Nombre
        self.Simbolo=Simbolo
        self.Numero_Atomico=Numero_Atomico
        self.Masa_Atomica=Masa_Atomica
        self.Periodo=Periodo
        self.Grupo=Grupo
        self.Densidad=Densidad
        self.Categoria=Categoria
        self.Informacion=Informacion

    def Imprimir_Info(self):
        print(f'Nombre: {self.Nombre}')
        print(f'Simbolo : {self.Simbolo}')
        print(f'Numero Atomico: {self.Numero_Atomico}')
        print(f'Masa Atomica: {self.Masa_Atomica}')
        print(f'Periodo: {self.Periodo}')
        print(f'Grupo: {self.Grupo}')
        print(f'Densidad: {self.Densidad}')
        print(f'Categoria: {self.Categoria}')
        print(self.Informacion)

    def CorNombre(self):
        self.Nombre = self.Nombre.title()

    def CorMasa_Atomica(self):
        num = ""
        for i in self.Masa_Atomica:
            if i != ",":
                if (i != " ") and (i != 'u'):
                    num = num + i
            else: 
                num = num + "."

        num = float(num)

        self.Masa_Atomica = num


    def CorDensidad(self):
        num = ""
        for i in self.Densidad:
            if i != ",":
                if (i != " ") and (i != 'g') and (i != '/') and (i != 'm') and (i != 'l') and (i != '-'):
                    num = num + i
            else: 
                num = num + "."

        #print(num)
    
        try:
            num = float(num)
        except:
            num = ""

        self.Densidad = num

    def CorCategoria(self):
        cat = {'Gases Nobles':1, 'No Metales':2, 'Metales Alcalinos':3, 'Alcalinotérreos':4, 'Metaloides':5, 'Halógenos':6, 'Metales':7, 'Metales de transición':8, 'Lantanidos':9, 'Actinido':10}
        self.Categoria = cat[self.Categoria]

    def CorInformacion(self):
        info = ""

        for i in self.Informacion:
            if i != "\n":
                info = info + i

        if info == '-':
            info = ''

        self.Informacion = info





