import React from 'react'

export const Tarea = ({tareas, setTareas}) => {


    const borrarTarea = (id) => {
        console.log(id);
        setTareas(tareas.filter( tarea => tarea.id !== id))
    }

    const cambiarEstado = (id) => {
        console.log(tareas);
        const completadas = tareas.map( tarea => {
            // ...tarea, como completado ya existe, la rescribo
            return tarea.id === id ? { ...tarea, completado: !tarea.completado} : tarea;
        })
        console.log(completadas);

        setTareas(completadas)
    }

  return (
    <ul>
        {
            tareas.map( t => (
        <li key={t.id} className='todo-container'>
            <input type="checkbox" className='todo-checkbox' onChange={() => cambiarEstado(t.id)}/>
            <span className='todo-item'>{t.text}</span>
            <button className='button todo-delete' onClick={() => borrarTarea(t.id)}>Borrar tarea</button>
        </li>
            ))
        }
    </ul>
  )
}
