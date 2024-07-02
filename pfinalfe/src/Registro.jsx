import { useState } from "react"
import { post } from "./hooks/useFecht"
import { useNavigate } from "react-router-dom"



const Registro = () => {
    const nav = useNavigate()
    const [nombre,setNombre] =useState('')
    const [correo,setCorreo] =useState('')
    const [clave,setClave]= useState('')


    
    const crearUsuario =()=>{
        const user={
            nombre:nombre,
            correo:correo,
            clave:clave
        }
        post('users',user)

    }
    const espacios = () => {
        // console.log("nombre", nombre.current.value)
        if (!nombre.current && !correo.current && !clave.current) {
            
            nav("/login")
        } 
    }

    return (
        <>
            <input className="inicio" type="text" placeholder="Ingrese su nombre" onChange={(e)=>setNombre(e.target.value)} />
            <input className="inicio" type="mail" placeholder="Ingrese su correo" onChange={(e)=>setCorreo(e.target.value)} />
            <input className="inicio" type="password" placeholder="Ingrese su contraseña" onChange={(e)=>setClave(e.target.value)} />
            <button className="boton" onClick={crearUsuario}>Guardar</button>
            <button className="boton" onClick={espacios}>Login</button>
        </>
    )
}

export default Registro