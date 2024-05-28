import React from 'react'

export const Boton = ({tareas, setTareas}) => {

    const agregarTarea = () => {

        const nuevaTarea = {
            id: tareas.length + 1,
            text: `Tarea ${tareas.length + 1}`,
            completado: false
        }

        setTareas([...tareas, nuevaTarea])
    }
    

  return (
    <button className='button center' onClick={agregarTarea}>Agregar Tarea</button>
  )
}

