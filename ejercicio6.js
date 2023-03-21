// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ["Pan", "Carne", "Leche", "Azucar", "Manteca"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol");
console.log(compras);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop(); 
console.log(compras);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        titulo: "Harry Potter",
        director: "David Yates",
        fecha: 2001,
    },
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        fecha: 2003,
    },
    {
        titulo: "Cars",
        director: "John Lasseter",
        fecha: 2006,
    }
];
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filtroPeliculas = peliculas.filter(peliculas => peliculas.fecha > 2010);
console.log(filtroPeliculas);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresPeliculas = peliculas.map((valor, indice) => ` ${indice + 1}- ${valor.director}`)
console.log(directoresPeliculas);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulosPeliculas = peliculas.map((valor, indice) => ` ${indice + 1}- ${valor.titulo}`)
console.log(titulosPeliculas);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const peliculasConcat = peliculas.concat(`Los directores son: ${ directoresPeliculas}, y los títulos son: ${titulosPeliculas}`);
console.log(peliculasConcat);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const peliculasFactorProp = [...directoresPeliculas, ...titulosPeliculas];
console.log(peliculasFactorProp);