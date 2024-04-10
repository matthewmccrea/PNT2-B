const cargarUsuario = async () => {
    const respuesta = await fetch('https://randomuser.me/api/')

    const datos = await respuesta.json()

    

    const usuario = datos.results[0]


    // VOLVEMOS 21:35

    return usuario

}

// Async y Await

async function funcionPadre(){
    const datos = await obtenerUsuario()
    
    console.log(`Nombre: ${datos.name.first} ${datos.name.last}`);

}

funcionPadre()


// funcion flecha y funcion tradicional
// function () es lo mismo que () =>

