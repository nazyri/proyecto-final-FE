
import {  useState, useRef } from "react";
import { put } from "./hooks/useFecht"


function Editar({animal, cambio}) {

    const [raza, setRaza]= useState('')
    const [descripcion,setDescripcion]= useState('')

    const razaRef = useRef();
    const descripcionRef = useRef();

    const actualizar = async ()=>{
      console.log('se ejecuta');
        const user={
            raza:raza,
            descripcion:descripcion,
            fecha:animal.fecha,
            imagen:animal.imagen

        }
        await put ("products/", animal.id, user)
        cambio(false)
      }
      
      const espacios = () => {

        const razaTrim = razaRef.current.value
        const descripcionTrim = descripcionRef.current.value
          
          if ( !razaTrim || !descripcionTrim) {
            alert("espacios vacios")
            return
        } 
      }
   

  
  

  return (
    <div>
      <input type="text" ref={razaRef} placeholder="cambiar raza" onChange={(e)=> {setRaza(e.target.value)}}/>
      <input type="text" ref={descripcionRef} placeholder="cambiar descripcion" onChange={(e)=>{setDescripcion(e.target.value)}}/>
      <p>Si desea que la informacion se actualice dele click al boton</p>

      <button type="button" onClick={()=>actualizar(espacios)}>cambiar informacion</button>

      
    </div>
  )
}

export default Editar
