//Crea un archivo JS que contenga las siguientes líneas
//- Una función sin parámetros que devuelva siempre "true"
function verdad(){
    return true
}
//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asinc(){
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}
asinc()

// Una función generadora de índices pares automáticos
function* generadora(){
    let indice = 0;
    while(true){
        indice = indice + 2
        if(indice === 40){
            return indice
        }
        yield indice
    }
}
const indi = generadora();
console.log(indi.next())
console.log(indi.next())
console.log(indi.next())
console.log(indi.next())
console.log(indi.next())
console.log(indi.next())
console.log(indi.next())



