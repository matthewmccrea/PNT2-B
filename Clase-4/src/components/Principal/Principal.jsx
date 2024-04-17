import { Alumno } from "./FichaAlumnos/Alumno"
import { Titulo } from "./FichaAlumnos/Titulo"

export const Principal = () => {

    const alumnos = ['Matias', 'Lucila', 'Pedro', 'Marcos']

    const fichaAlumnos = [
        {
            nombre: 'Matias',
            cargo: 'Docente',
            materia: 'PNT2'
        },
        {
            nombre: 'Marcos',
            cargo: 'Alumno',
            materia: 'PNT2'
        },
        {
            nombre: 'Martin',
            cargo: 'Alumno',
            materia: 'PNT2'
        },
    ]

    return (
        <>
            <Titulo />
            <h1>Alumnos:</h1>
            {
                fichaAlumnos.map((alumno) => (
                    <Alumno nombre={alumno.nombre} materia={alumno.materia} cargo={alumno.cargo} />
                ))
            }
        </>
    )
}




