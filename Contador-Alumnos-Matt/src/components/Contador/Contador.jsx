import React from 'react'
import { useState } from 'react';

const Contador = () => {

    //Contador funcional
    //Paso 1, inicializar el estado del contador

    const [contador,setContador] = useState(0)

    const Incrementar = ()=>{
        setContador(contador+1);
    }

    const Reducir = ()=>{
        setContador(contador-1);
    }
    
    //Contador no funcional
    /*
    let contador=0;

const incrementar = () =>{
    contador++;
}
*/

  return (
    <>
    <h2>Contador de alumnos: {contador}</h2>
    <button onClick={Incrementar}>Incrementar los alumnos</button>
    <button onClick={Reducir}>Reducir los alumnos</button>
    </>
  )
}

export default Contador
