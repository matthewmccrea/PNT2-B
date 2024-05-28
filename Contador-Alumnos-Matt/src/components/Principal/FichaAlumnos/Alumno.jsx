import React from 'react'

const Alumno = (props) => {

let nombre = props.nombre;

if (nombre=="Matias") {
    nombre = "Profe Matias"
    
}

  return (
    <>
    <h1>Alumno</h1>
    <h2>Nombre: {nombre}</h2>
    <h2>Materia: {props.materia}</h2>
    </>
  )
}

export default Alumno
