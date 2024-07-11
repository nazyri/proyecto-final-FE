import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "./hooks/useFecht";
import "./styles/Login.css"


const Login = () => {
  const nav = useNavigate();
  const [useData, setUseData]= useState([])
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  const correoRef = useRef();
  const claveRef = useRef();

  const vacios = () => {
    const correoTrim = correoRef.current.value.trim();
    const claveTrim = claveRef.current.value.trim();

    if (!correoTrim || !claveTrim) {
      alert("Por favor complete todos los campos.");
      return;
    }
    // Llama a la función para autenticar al usuario
    const valida=useData.find(user=>user.correo === correo && user.clave === clave)
    authenticate(valida)
  };

  const authenticate = async (valida) => {
    try {
      if(valida){
        nav("/principal")
        return
      }else{
      alert("Ocurrió un error durante la autenticación. Inténtelo nuevamente más tarde.");
      }
    } catch (error) {
      console.error("Error de autenticación:", error);
      // Manejo de errores, por ejemplo, mostrar un mensaje genérico de error
      alert("Ocurrió un error durante la autenticación. Inténtelo nuevamente más tarde.");
    }
  };

  useEffect (()=>{
    const usarGet =async ()=>{
    const data = await get("users")
       setUseData(data)
   }
   console.log(useData);
   usarGet()
   },[])

  return (
    <div className="seccion6">
      <input className="inicio" ref={correoRef} type="email" id="correos" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
      <input className="inicio"ref={claveRef} type="password"id="clave"placeholder="Ingrese su contraseña" value={clave} onChange={(e) => setClave(e.target.value)}/>
      <button className="boton" id="guardarclave" onClick={vacios}>Ir a la página</button>
    </div>
  );
};

export default Login;