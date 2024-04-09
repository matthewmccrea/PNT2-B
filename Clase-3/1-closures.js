function func(){
    var mensaje = 'Hola'

    function hija(){
        console.log(mensaje);
    }

    return hija
}

const llamado = func();

console.log(llamado.toString());

llamado();

