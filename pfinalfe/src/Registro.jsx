import { useRef, useState } from "react"
import { post } from "./hooks/useFecht"
import { useNavigate } from "react-router-dom"
import "./styles/Registro.css"


const Registro = () => {
    const nav = useNavigate()
    const [nombre,setNombre] =useState('')
    const [correo,setCorreo] =useState('')
    const [clave,setClave]= useState('')

    const nombreRef = useRef()
    const correoRef =useRef()
    const claveRef =useRef()
    
    const crearUsuario =()=>{
        const user={
            nombre:nombre,
            correo:correo,
            clave:clave
        }
        post('users',user)

    }
    const espacios = () => {
        const nombreTrim = nombreRef.current.value
        const correoTrim = correoRef.current.value
        const claveTrim = claveRef.current.value
        // console.log("nombre", nombre.current.value)
        if (!nombreTrim || !correoTrim || !claveTrim) {
            alert("espacios vacios")
            return
        } else {
            nav("/login")
            

        }
        }

    return (
        <div className="seccion">
            <input className="inicio" ref={nombreRef} type="text" placeholder="Ingrese su nombre" onChange={(e)=>setNombre(e.target.value)} />
            <input className="inicio" ref={correoRef} type="mail" placeholder="Ingrese su correo" onChange={(e)=>setCorreo(e.target.value)} />
            <input className="inicio" ref={claveRef} type="password" placeholder="Ingrese su contraseña" onChange={(e)=>setClave(e.target.value)} />
            <button className="boton" onClick={crearUsuario}>Guardar</button>
            <button className="boton" onClick={espacios}>Login</button>

        </div>
    )
}

export default Registro