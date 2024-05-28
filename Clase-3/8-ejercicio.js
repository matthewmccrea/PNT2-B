/*function obtenerUsuariosAleatorios(){
    fetch('https://randomuser.me/api');
    

    return 0 
}*/

const obtenerUsuariosAleatorios = async () =>{

    tresUsuariosAleatorios = [];

    for (let index = 0; index < 3; index++) {
        const respuesta = await fetch ('https://randomuser.me/api');

        const datos = await respuesta.json();

        console.log(datos.results[0].name);
        const nombreCompleto = datos.results[0].name.first +" "+datos.results[0].name.last;

        tresUsuariosAleatorios.push(nombreCompleto);
        
        return tresUsuariosAleatorios
    }
}


// Consiga:
// Obtener 3 usuarios Aleatorios
// Devolver un array con los nombres completos de los 3 usuarios
// EJEMPLO DEL LOG: ['Matias Duro', 'Juan Garcia', 'Pedro Martinez']

const usuarios = obtenerUsuariosAleatorios();

console.log(usuarios)

