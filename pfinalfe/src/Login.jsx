import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

// async function GetLogin(obj) {

//   try {
//       const respuesta = await fetch(`http://localhost:3001/users`, {
//           method: "POST",
//           headers: {
//           },
//           body: JSON.stringify(obj)
//       })
//       let agregar = await respuesta.json()

//       console.log(agregar)
//   } catch (error) {
//       console.error(error)
//   }
// }

const Login = () => {
    const nav = useNavigate()
    const usuario = useRef ('')
    const clave = useRef ('')
    
    const vacios = () => {
    if (!usuario.current.value && !clave.current.value) {
       alert ("hay espacios vacios")
    }else{
      nav("/principal")
       
    }
    }

    useEffect (()=>{
        const GetLogin = async() => {
            
        try {
            const respuesta = await fetch('http://localhost:3001/api/task')
            const agregar = await respuesta.json()
        
                console.log(`Los datos son ${agregar}`);
            } catch (error) {
                console.error(error);
            }
            }
            GetLogin()
            },[])

    return (
      <>
    <input className="inicio" type="gmail" id="correos" placeholder="Ingrese su correo"ref={usuario}/>
    <input className="inicio" type="password" id="clave" placeholder="Ingrese su contraseña"ref={clave}/>
    <button className="boton" id="guardarclave"  onClick={vacios}>Ir a la pagina</button>
      </>
    )
  }
  
  export default Login