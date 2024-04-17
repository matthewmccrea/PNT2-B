

export const Alumno = (Props) => {

    // let nombre = props.nombre

    // if(nombre === 'Matias'){
    //     nombre = "Profe Matias"
    // }

    const {nombre, cargo, materia} = Props;
  

  return (
    <div className="" style={{}}>
    <h2>Nombre: {nombre}</h2>
    <h2>Cargo: {cargo}</h2>
    <h2>Materia: {materia}</h2>
    </div>
  )
}
