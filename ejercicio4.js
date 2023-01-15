//Ejercicio 4

//- Una cadena de texto con tu Nombre
let nombre = "Salvador";

// Una cadena de texto con tu Apellido
let apellido = "Giletto";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}` ;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;
console.log(numeroLetras);

//Una variable que contenga la primera letra del Nombre
let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

//Otra variable que contenga la última letra del Apellido
//total de letras el apellido lenght - 1 = 6
console.log(apellido.length - 1);
let ultimaLetra = apellido.charAt(6);
console.log(ultimaLetra);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacios = estudiante.trim();
console.log(eliminarEspacios);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let bool = estudiante.includes(`${nombre}`);
console.log(bool);

