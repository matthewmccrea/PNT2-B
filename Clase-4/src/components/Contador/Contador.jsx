import { useState } from "react"

export const Contador = () => {


    // Inicializar el estado del contador

    const [contador, setContador] = useState(0)

    // const [value, setValue] = useState()

    const Incrementar = () => {
        setContador(contador + 1)
    }

    const Reducir = () => {
        setContador(contador - 1)
    }


  return (
    <>
    <h2>Contador de Alumnos: {contador}</h2>
    <button onClick={Incrementar}>Incrementar los alumnos en +1</button>
    <button onClick={Reducir}>Reducir los alumnos en -1</button>

    </>
  )
}
