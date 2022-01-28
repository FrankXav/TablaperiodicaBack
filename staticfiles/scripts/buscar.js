
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

const BuscarElemento = async () => {
    let textNombre = document.getElementById('buscar_name').value
    let textSimbolo = document.getElementById('buscar_simbolo').value
    if ((textNombre=="") && (textSimbolo=="")){
        alert('Introduzca el Nombre o el Simbolo del elemento a buscar')
        return
    }
    textNombre = capitalizarPrimeraLetra(textNombre)
    textSimbolo = capitalizarPrimeraLetra(textSimbolo)
    let link = '/filter/?nombre='+textNombre+'&simbolo='+textSimbolo
    relemento = await fetch(link)
    element = await relemento.json()
    console.log(element)
    if (element.length == 0){
        alert('No exite')
        return
    }
    else {
        contlis = document.getElementById('ContList')
        contlis.innerHTML = ""
        cuadro = document.createElement('div')
        cuadro.classList.add('cuadro')
        if (element[0].categoria == 'Gases Nobles'){
            cuadro.style.backgroundColor = 'rgb(7, 59, 0)';
            cuadro.style.color = 'white'
        }
        else if (element[0].categoria == 'Metales de transición'){
            cuadro.style.backgroundColor = 'rgb(3, 131, 190)';
            cuadro.style.color = 'white'
        }
        else if (element[0].categoria == 'Halógenos'){
            cuadro.style.backgroundColor = 'rgb(0, 156, 8)';
        }
        else if (element[0].categoria == 'Alcalinotérreos'){
            cuadro.style.backgroundColor = 'rgba(255, 238, 0, 0.87)';
        }
        else if (element[0].categoria == 'No Metales'){
            cuadro.style.backgroundColor = 'rgb(255, 102, 0)';
        }
        else if (element[0].categoria == 'Metales Alcalinos'){
            cuadro.style.backgroundColor = 'rgb(0, 0, 90)';
            cuadro.style.color = 'white'
        }
        else if (element[0].categoria == 'Metaloides'){
            cuadro.style.backgroundColor = 'rgb(207, 0, 69)';
            cuadro.style.color = 'white'
        }
        else if (element[0].categoria == 'Lantanidos'){
            cuadro.style.backgroundColor = 'rgb(219, 215, 150)';
        }
        else if (element[0].categoria == 'Metales'){
            cuadro.style.backgroundColor = 'rgb(98, 0, 122)';
            cuadro.style.color = 'white'
        }
        else if (element[0].categoria == 'Actinido'){
            cuadro.style.backgroundColor = 'rgb(150, 205, 219)';
        }
        cuadro.onclick = () => {
            let ruta = '/detail' + '?' + element[0].nombre
            window.location = ruta
        }
        numeros = document.createElement('div')
        numeros.classList.add('num')
        letraElemento = document.createElement('div')
        letraElemento.classList.add('Letra')
        letraElemento.innerHTML = element[0].simbolo
        na = document.createElement('div')
        na.innerHTML = element[0].no_atomico
        ma = document.createElement('div')
        ma.innerHTML = element[0].masa_atomica.toFixed(2)
        nombre = document.createElement('div')
        nombre.classList.add('Nombre')
        nombre.innerHTML = element[0].nombre
        cuadro.appendChild(numeros)
        cuadro.appendChild(letraElemento)
        cuadro.appendChild(nombre)
        numeros.appendChild(na)
        numeros.appendChild(ma)
        contlis.appendChild(cuadro)
    }
}


let anterior = 1

const Lista = async () => {
    let orden = document.getElementById('OpcionesL').value
    contlis = document.getElementById('SeleccionarTL')
    if (orden == 1){
        if (anterior == 2){
            contlis.removeChild(ascodesc)
        }
        anterior = 1
        seleccion = '1'
        Listadep(seleccion)
    }
    else if (orden == 2) {
        let seleccion = "2"
        let sel = "1"
        anterior = 2
        ascodesc = document.createElement('select')
        ascodesc.classList.add('ascdesc')
        opcion1 = document.createElement('option')
        opcion2 = document.createElement('option')
        opcion1.value="1"
        opcion1.text = 'Ascendente'
        opcion2.value="2"
        opcion2.text = 'Descendente'
        ascodesc.appendChild(opcion1)
        ascodesc.appendChild(opcion2)
        contlis.appendChild(ascodesc)
        const ordenNombre = document.querySelector('.ascdesc')
        ordenNombre.addEventListener('change', (event) =>{
            selesccion = '2'
            seleccion = selesccion + event.target.value
            Listadep(seleccion)
        })
        
        seleccion = seleccion + sel
        Listadep(seleccion)
    }
    else if (orden == 3){
        if (anterior == 2){
            contlis.removeChild(ascodesc)
        }
        anterior = 3
        seleccion = '3'
        Listadep(seleccion)
    }
    else if (orden == 4){
        if (anterior == 2){
            contlis.removeChild(ascodesc)
        }
        anterior = 4
        seleccion = '4'
        Listadep(seleccion)
    }
    else if (orden == 5){
        if (anterior == 2){
            contlis.removeChild(ascodesc)
        }
        anterior = 5
        seleccion = '5'
        Listadep(seleccion)
    }
}

const Listadep = async (orden) =>{
    contlist = document.getElementById('Lista')
    contlist.innerHTML = ""
    let color
    switch (orden) {
        case "1":
            link = '/list/noatomico/'
            listare = await fetch(link)
            lista = await listare.json()
            color = 1
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                if (color == 1){
                    renglon.style.backgroundColor = 'cornflowerblue'
                }
                if (color == 0){
                    color = 1
                }
                else {
                    color = 0
                }
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
                nombre.onclick = () => {
                    let ruta = '/detail' + '?' + element.nombre
                    window.location = ruta
                }
                simbolo = document.createElement('div')
                simbolo.classList.add('simbolo')
                simbolo.innerHTML = element.simbolo
                no_ato = document.createElement('div')
                no_ato.classList.add('no_ato')
                no_ato.innerHTML = element.no_atomico
                renglon.appendChild(nombre)
                renglon.appendChild(simbolo)
                renglon.appendChild(no_ato)
                contlist.appendChild(renglon)
            });
            break;
            
        case '21':
            link = '/list/asc/'
            listare = await fetch(link)
            lista = await listare.json()
            color = 1
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                if (color == 1){
                    renglon.style.backgroundColor = 'cornflowerblue'
                }
                if (color == 0){
                    color = 1
                }
                else {
                    color = 0
                }
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
                nombre.onclick = () => {
                    let ruta = '/detail' + '?' + element.nombre
                    window.location = ruta
                }
                simbolo = document.createElement('div')
                simbolo.classList.add('simbolo')
                simbolo.innerHTML = element.simbolo
                no_ato = document.createElement('div')
                no_ato.classList.add('no_ato')
                no_ato.innerHTML = element.no_atomico
                renglon.appendChild(nombre)
                renglon.appendChild(simbolo)
                renglon.appendChild(no_ato)
                contlist.appendChild(renglon)
            });
            break;
        case '22':
            link = '/list/desc/'
            listare = await fetch(link)
            lista = await listare.json()
            color = 1
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                if (color == 1){
                    renglon.style.backgroundColor = 'cornflowerblue'
                }
                if (color == 0){
                    color = 1
                }
                else {
                    color = 0
                }
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
                nombre.onclick = () => {
                    let ruta = '/detail' + '?' + element.nombre
                    window.location = ruta
                }
                simbolo = document.createElement('div')
                simbolo.classList.add('simbolo')
                simbolo.innerHTML = element.simbolo
                no_ato = document.createElement('div')
                no_ato.classList.add('no_ato')
                no_ato.innerHTML = element.no_atomico
                renglon.appendChild(nombre)
                renglon.appendChild(simbolo)
                renglon.appendChild(no_ato)
                contlist.appendChild(renglon)
            });
            break;
        
        case '3':
            link = '/categoria/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                cat = element.categoria
                catid = element.id
                filtro = 'categoria'
                Listesp(cat, catid, filtro)
            }) 
            break;
        case '4':
            link = '/grupo/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                cat = element.no_grupo
                catid = element.id
                filtro = 'grupo'
                Listesp(cat, catid, filtro)
            })
            break;
        case '5':
            link = '/periodo/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                cat = element.no_periodo
                catid = element.id
                filtro = 'periodo'
                Listesp(cat, catid, filtro)
            })
            break;
    }
}

const Listesp = async (tit, id, filtro) =>{
    link = '/filter/?' + filtro + '=' + id
    console.log(link)
    elmentosre = await fetch(link)
    elementos = await elmentosre.json()
    contlist = document.getElementById('Lista')
    titulo = document.createElement('div')
    titulo.classList.add('titulolist')
    filtro = capitalizarPrimeraLetra(filtro)
    titulo.innerHTML = filtro + ': ' + tit
    contlist.appendChild(titulo)
    color = 1
    elementos.forEach(element =>{
        renglon = document.createElement('div')
        renglon.classList.add('renglon')
        if (color == 1){
            renglon.style.backgroundColor = 'cornflowerblue'
        }
        if (color == 0){
            color = 1
        }
        else {
            color = 0
        }
        nombre = document.createElement('div')
        nombre.classList.add('nombre')
        nombre.innerHTML = element.nombre
        nombre.onclick = () => {
            let ruta = '/detail' + '?' + element.nombre
            window.location = ruta
        }
        simbolo = document.createElement('div')
        simbolo.classList.add('simbolo')
        simbolo.innerHTML = element.simbolo
        no_ato = document.createElement('div')
        no_ato.classList.add('no_ato')
        no_ato.innerHTML = element.no_atomico
        renglon.appendChild(nombre)
        renglon.appendChild(simbolo)
        renglon.appendChild(no_ato)
        contlist.appendChild(renglon)
    })
} 

function RegresarMain() {
    let ruta = '/'
    window.location = ruta
}

Lista()

