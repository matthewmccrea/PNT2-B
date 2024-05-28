/*
const llamadoSQL = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve('Hola')
            } catch (error) {
                reject(error);
            }
        }, 500);
    })
} 

const func = () => {
    const data = llamadoSQL()

    console.log(data);

    console.log('Esperando...');


    setTimeout(() => {
        console.log(data);
    }, 1000);

}


func()
*/

const llamadoSQL = ()=>{

    //Esta es la sintaxis de una promesa, lo que hace la promesa es prometer que va a hacer algo determinado
    //Esto sirve para destructurar el codigo para que si falla, sabes que fallo la promesa.
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{

            resolve('Hola')

            reject('Error 404')
        },500);
    })
}

const func = () =>{
    const data = llamadoSQL();


    console.log(data);

    console.log("Esperando...");

    //El set timeout es para ordenar la ejecucion de codigo en tiempo. 999 serian 999 milisegundos.
    setTimeout(()=>{
        console.log(data);
    },999)

   
}

func()