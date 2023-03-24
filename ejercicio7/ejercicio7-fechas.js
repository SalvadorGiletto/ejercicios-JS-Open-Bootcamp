//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)

//- La fecha de tu nacimiento
const fechaNac = new Date(1993, 1, 9)
console.log(fechaNac)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = fechaHoy > fechaNac
console.log(masTarde)

//- Una variable que contenga el día de tu nacimiento
const diaNac = fechaNac.getDate()
console.log(diaNac)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechaNac.getMonth() + 1
console.log(mesNac)

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNac = fechaNac.getFullYear(fechaNac)
console.log(anyoNac)