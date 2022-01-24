url = window.location.href

/* console.log(url) */

let elemento

for (let i = 0 ; i<= url.lenght() ;i++) {
    let incio = false
    if (url[i] === '?') {
        console.log(incio)
        incio = true
    }
    if (incio){
        elemento.concat(url[i])
    }
}

console.log(elemento)