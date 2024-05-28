import React from 'react'
import Contador from '../Contador/Contador'
import Alumno from './FichaAlumnos/Alumno'

const Principal = () => {

const alumnos = ["Matias", "Lucia", "Pedro", "Marcos"]

return(

    <>
    <Contador>

    </Contador>
    </>
)

/*
  return (
   <>


 <h1>Clase 4</h1>


{
alumnos.map((alumno)=>(
    <Alumno nombre={alumno} materia="PNT2" sede="Belgrano" />
))

}
<Alumno nombre="Matias"materia="PNT2"/>
  </>
  ) */
}

export default Principal
