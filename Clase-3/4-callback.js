function obtenerNombreUsuario(id, ejemploCallback){
    setTimeout(() => {
        let Usuario3 = 'Martin'

        // Usuario1 no es un string, sino que es una llave, tampoco es una variable
        // Es la forma en la cual yo despues voy a acceder al dato de ese objeto
        const nombres = {
            Usuario1:'Matias',
            Usuario2: 'Pedro',
            // Usuario3: Usuario3
            Usuario3
        }

        // console.log(nombres["Usuario1"]);

        // console.log(nombres.Usuario1);

        const nombre = nombres[id]

        ejemploCallback(nombre)

    


    }, 500);
}

// nombre es el parametro, la funcion no tiene un nombre particular

obtenerNombreUsuario('Usuario2', (nombre) => {
    console.log(`El nombre del usuario es ${nombre}`);
})

// Callback: Funcion que recibe como parametro otra funcion

// obtenerNombreUsuario('Usuario2', function(nombre){
//     console.log(`El nombre del usuario es ${nombre}`);
// })