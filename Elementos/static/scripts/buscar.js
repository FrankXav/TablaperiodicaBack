/* let textNombre = document.getElementById('buscar_name').value */

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
    console.log(textNombre)
    textSimbolo = capitalizarPrimeraLetra(textSimbolo)
    console.log(textSimbolo)
    let link = 'https://tabalperiodicafrank.herokuapp.com/filter/?nombre='+textNombre+'&simbolo='+textSimbolo
    relemento = await fetch(link)
    element = await relemento.json()
    console.log(element)
    if (element.length == 0){
        alert('No exite')
        return
    }
}

const TipoList = () =>{

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
    switch (orden) {
        case "1":
            link = 'https://tabalperiodicafrank.herokuapp.com/list/noatomico/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
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
            link = 'https://tabalperiodicafrank.herokuapp.com/list/asc/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
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
            link = 'https://tabalperiodicafrank.herokuapp.com/list/desc/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                renglon = document.createElement('div')
                renglon.classList.add('renglon')
                nombre = document.createElement('div')
                nombre.classList.add('nombre')
                nombre.innerHTML = element.nombre
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
            link = 'https://tabalperiodicafrank.herokuapp.com/categoria/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                cat = element.categoria
                catid = element.id
                Listesp(cat, catid)
            }) 
            break;
        case '4':
            link = 'https://tabalperiodicafrank.herokuapp.com/grupo/'
            listare = await fetch(link)
            lista = await listare.json()
            lista.forEach(element => {
                cat = element.categoria
                catid = element.id
                Listesp(cat, catid)
            })
            break;
    }
}

const Listesp = async (categoria, id) =>{
    /* contlist = document.getElementById('Lista')
    titulolist = createElement('div')
    titulo.classList.add('titulolist')
    titulo.innerHTML = categoria */
    link = 'https://tabalperiodicafrank.herokuapp.com/filter/?categoria=' + id
    elmentosre = await fetch(link)
    elementos = await elmentosre.json()
    contlist = document.getElementById('Lista')
    titulo = document.createElement('div')
    titulo.classList.add('titulolist')
    titulo.innerHTML = categoria
    contlist.appendChild(titulo)
    elementos.forEach(element =>{
        renglon = document.createElement('div')
        renglon.classList.add('renglon')
        nombre = document.createElement('div')
        nombre.classList.add('nombre')
        nombre.innerHTML = element.nombre
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
    console.log(elementos)
} 

Lista()

