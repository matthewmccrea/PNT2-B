function intentoDeMap(arr, fnc){

    const nuevoArray = [];

    // arr.forEach((element) => {
        
    // });
    arr.forEach(function(numeros){
        nuevoArray.push(fnc(numeros))
    });



    return nuevoArray

}


function sumarUno(num){
    return num * 1
}

function anadirString(num){
    return 'Numero ' + num 
}

const array = [2, 4, 7, 8]

// Dentro del console log esta:
// const mapEs = map(array, sumarUno())

// array.map(producto => {

// // asi se re utiliza un componente mas adelante en React 

//     // <h1>{producto.titulo}</h1>
//     // <p>{producto.precio}</p>
//     // <p>{producto.descripcion}</p>
    
// })


// // array.map(producto => {
// array.map(function(){

// })



console.log(intentoDeMap(array, sumarUno));