import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { get } from "./hooks/useFecht"
import "./styles/Login.css"


const Login = () => {

  const nav = useNavigate()
  const [useData, setUseData]= useState([])
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  
  // error
    const vacios = () => {
    if (!correo.trim && !clave.trim   ) {
      alert ("hay espacios vacios")
      }else{
        nav("/principal")
        return
       
    }
    }

    useEffect (()=>{
     const usarGet =async ()=>{
     const data= await get("users")
        setUseData(data)

    }
    usarGet()
    },[])
            

    return (
      <>
      <div className="seccion6">
      <input className="inicio" type="gmail" id="correos" placeholder="Ingrese su correo"onChange={(e)=>setCorreo(e.target.value)}/>
      <input className="inicio" type="password" id="clave" placeholder="Ingrese su contraseña"onChange={(e)=>setClave(e.target.value)}/>
      <button className="boton" id="guardarclave"  onClick={()=>{vacios( nav("/principal"))}}>Ir a la pagina</button>
      </div>
      </>
    )
  }
  
  export default Login