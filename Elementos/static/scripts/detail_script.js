url = window.location.href

url = url.toString()

let elemento = ''
let incio = false

for (let i = 0 ; i<= url.length -1 ;i++) {
    if (incio){
        elemento = elemento + url[i]
    }
    if (url[i] === '?') {
        incio = true
    }
    
}

const info = async () => {
    link = '/detail/' + elemento
    relemento = await fetch(link)
    element = await relemento.json()
    texto = document.getElementById('Nombre')
    texto.innerHTML = element.nombre
    texto = document.getElementById('Simbolo')
    texto.innerHTML = element.simbolo
    texto = document.getElementById('NoAtomico')
    texto.innerHTML = element.no_atomico
    texto = document.getElementById('Periodo')
    texto.innerHTML = element.periodo
    texto = document.getElementById('Grupo')
    texto.innerHTML = element.grupo
    texto = document.getElementById('MasaAtomica')
    texto.innerHTML = element.masa_atomica + ' u'
    texto = document.getElementById('Densidad')
    texto.innerHTML = element.densidad + ' g/ml'
    texto = document.getElementById('Categoria')
    texto.innerHTML = element.categoria
    texto = document.getElementById('Sim')
    texto.innerHTML = element.simbolo
    texto = document.getElementById('Name')
    texto.innerHTML = element.nombre
    cuadro = document.getElementById('cuadro')
    if (element.categoria == 'Gases Nobles'){
        cuadro.style.backgroundColor = 'rgb(7, 59, 0)';
    }
    else if (element.categoria == 'Metales de transición'){
        cuadro.style.backgroundColor = 'rgb(3, 131, 190)';
        cuadro.style.color = 'white'
    }
    else if (element.categoria == 'Halógenos'){
        cuadro.style.backgroundColor = 'rgb(0, 156, 8)';
    }
    else if (element.categoria == 'Alcalinotérreos'){
        cuadro.style.backgroundColor = 'rgba(255, 238, 0, 0.87)';
    }
    else if (element.categoria == 'No Metales'){
        cuadro.style.backgroundColor = 'rgb(255, 102, 0)';
    }
    else if (element.categoria == 'Metales Alcalinos'){
        cuadro.style.backgroundColor = 'rgb(0, 0, 90)';
    }
    else if (element.categoria == 'Metaloides'){
        cuadro.style.backgroundColor = 'rgb(207, 0, 69)';
    }
    else if (element.categoria == 'Lantanidos'){
        cuadro.style.backgroundColor = 'rgb(219, 215, 150)';
    }
    else if (element.categoria == 'Metales'){
        cuadro.style.backgroundColor = 'rgb(98, 0, 122)';
    }
    else if (element.categoria == 'Actinido'){
        cuadro.style.backgroundColor = 'rgb(150, 205, 219)';
    }
    informacion = document.getElementById('informacion')
    informacion.innerHTML = element.informacion

}

info()