import { useState } from "react"
import { post } from "./hooks/useFecht"
import { useNavigate } from "react-router-dom"

function Adopcion() {

  
    const nav = useNavigate()
    const [imagen,setImagen] =useState('')
    const [fecha,setFecha] =useState('')
    const [raza,setRaza] =useState('')
    const [descripcion,setDescripcion]= useState('')
  
  
    
    const Adopcion =()=>{
        const user={
            imagen:imagen,
            fecha:fecha,
            raza:raza,
            descripcion:descripcion
        }
        post('products',user)
  
    }
    const espacios = () => {
        // console.log("nombre", nombre.current.value)
        if (!imagen.trim && !fecha.trim && !descripcion.trim) {
            
            nav("/contactos")
        } 
    }

    return (
      <>
      <ul>Instrucciones </ul>
      <li>Agregue la fecha del dia que lo pene en adopcion</li>
      <li>Agregue la imagen de su mascota</li>
      <li>Agregue una descripcion</li>
      <li>Llene el siguiente formulario</li>
      <hr />
      <p>Poner en adopcion a una mascota de la calle</p>
      <input type="text" placeholder="Suba la imagen" onChange={(e)=>setImagen(e.target.value)}/>
      <input type="text" placeholder="ingrese la fecha" onChange={(e)=>setFecha(e.target.value)}/>
      <input type="text" placeholder="Que raza es" onChange={(e)=>setRaza(e.target.value)}/>
      <input type="text" placeholder="Agregue una descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>
      <button onClick={Adopcion}>Poner en adopcion</button>
      <button onClick={espacios}>contactarnos</button>

      
      </>
    )
  }
  
  export default Adopcion
  