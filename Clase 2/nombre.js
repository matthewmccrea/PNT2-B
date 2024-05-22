//Se pueden crear objetos
let objeto = {
    nombre: "Matias",
    clase: "PNT2",
    cuatrimestre: 1,
    tecnologias: {
        Tecnologia1: "Javascript",
        Tecnologia2:  "Java"
    }
}

//Se pueden llamar a atributos de objetos de manera plurarl y singular

console.log(objeto.tecnologias);
console.log(objeto.cuatrimestre, objeto.nombre);

//Se pueden realizar validaciones con los valores del objeto

let persona = {

nombre:"Marcos",
edad: 18

}

if (persona.edad<18) {
    persona.permitido =false;
    
}else{
    persona.permitido = true;
}

console.log(persona);
