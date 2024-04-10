function obtenerUsuariosAleatorios(){
    fetch('https://randomuser.me/api');
    

    return 0 
}


// Consiga:
// Obtener 3 usuarios Aleatorios
// Devolver un array con los nombres completos de los 3 usuarios
// EJEMPLO DEL LOG: ['Matias Duro', 'Juan Garcia', 'Pedro Martinez']

const usuarios = obtenerUsuariosAleatorios();

console.log(usuarios)

