/*
const obtenerUsuario = () => {

    return fetch('https://randomuser.me/api/')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((datos) => {
        const usuario = datos.results[0]
        return usuario
    })

}


const datos = obtenerUsuario()
                .then((user) =>{
                    // console.log(user);

                    // console.log('Nombre: '+ user.name.first + " " + user.name.last);
                    console.log(`Nombre: ${user.name.first} ${user.name.last}`);
                    console.log(`Email: ${user.email}`);
                })

// console.log(datos);
*/


const obtenerUsuario = ()=>{

    return fetch ('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })
    .then((datos)=>{
        
        const usuario = datos.results[0];
        return usuario;
    })
}

const datos = obtenerUsuario().then((user)=>{
   // console.log(user);
   console.log(`Nombre: ${user.name.first} ${user.name.last}`);
   console.log(`Email: ${user.email}`);
   console.log(`Gender: ${user.gender}`);

})

console.log(datos);
