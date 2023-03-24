//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = 
    {
        nombre: "Salvador",
        apellido: "Giletto",
        edad: 30,
        altura: 1.95,
        eresDesarrollador: true
    }    

console.log(datosPersonales)

//- Una variable que obtenga tu edad a partir del objeto anterior
const edadPersonal = datosPersonales.edad
console.log(edadPersonal)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonales2 = [
    {
        nombre: "Salvador",
        apellido: "Giletto",
        edad: 30,
        altura: 1.95,
        eresDesarrollador: true
    },
    {
        nombre: "Nicolás",
        apellido: "Lingua",
        edad: 34,
        altura: 1.75,
        eresDesarrollador: false
    },
    {
        nombre: "Juancito",
        apellido: "Cesaretti",
        edad: 22,
        altura: 1.80,
        eresDesarrollador: false
    }
] 

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosPersonalesOrdenados = datosPersonales2.sort((a , b) => a.edad - b.edad)
console.log(datosPersonalesOrdenados)