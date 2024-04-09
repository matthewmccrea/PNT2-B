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