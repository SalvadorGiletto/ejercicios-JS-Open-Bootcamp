//Ejercicio 5
let altura_cm = 195;
let altura_m =1.95;
let peso = 100.5;

//redondeo de altura
let altura_toFixed = altura_m.toFixed();
console.log(altura_toFixed);

//redondeo hacia abajo
let peso_floor = Math.floor(peso);
console.log(peso_floor);

//Maximo JS
let max_js = Number.MAX_VALUE;
let max_masUno = max_js + 1 === max_js;
console.log(max_masUno);