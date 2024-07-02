import { useRef } from "react"
import { useNavigate } from "react-router-dom"

async function PostRegistro(obj) {

    try {
        const respuesta = await fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
            },
            body: JSON.stringify(obj)
        })
        let agregar = await respuesta.json()

        console.log(agregar)
    } catch (error) {
        console.error(error)
    }
}

const Registro = () => {
    const nav = useNavigate()
    const nombre = useRef('')
    const usuario = useRef('')
    const clave = useRef('')

    const espacios = () => {
        // console.log("nombre", nombre.current.value)
        if (!nombre.current.value && !usuario.current.value && !clave.current.value) {
            alert("hay espacios vacios")
        } else {
            
            nav("/login")
        }
    }

    return (
        <>
            <input className="inicio" type="text" placeholder="Ingrese su nombre" ref={nombre} />
            <input className="inicio" type="gmail" placeholder="Ingrese su correo" ref={usuario} />
            <input className="inicio" type="password" placeholder="Ingrese su contraseña" ref={clave} />
            <button className="boton" onClick={PostRegistro}>Guardar</button>
            <button className="boton" onClick={espacios}>Login</button>
        </>
    )
}

export default Registro