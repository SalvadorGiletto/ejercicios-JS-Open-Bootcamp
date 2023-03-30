//Crea un nuevo proyecto de Node

//- Instala la dependencia Winston
const logger = require("./logger"); //importamos el objeto a nuestro index principal

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const errorCatch = "El valor tiene que ser distinto a 0";
const miFuncion = valor => {
    if(valor != 0){
        return valor + 2
    }
    throw new Error(errorCatch);
}

//- Registra el error en un archivo a través de un try...catch
try{
    logger.info(miFuncion(0))
}catch(e){
    logger.error(errorCatch)
}