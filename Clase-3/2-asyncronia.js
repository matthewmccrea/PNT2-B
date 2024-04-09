function imprimirUno(){
    console.log('Uno');
}

function imprimirDos(){
    console.log('Dos');
}

function imprimirTres(){
    console.log('Tres');
}

setTimeout(imprimirUno, 0);

setTimeout(imprimirDos, 500);


imprimirTres();
