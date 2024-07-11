import "./styles/Visualizacion.css"
import { get, Delete } from "./hooks/useFecht"
import { useState, useEffect } from "react"
import Editar from "./Editar"


const Visualizacion=()=>{
  
    const [animales,setAnimales]=useState([])
    const [editando,setEditando]=useState(false)
    const [id,setId]=useState('')
    const [eliminar, setEliminar]=useState('')

    useEffect(()=>{
    console.log('Se ejecuta UseEffect');
    getProducts()
    },[editando])

    let getProducts=async()=>{
  
      const dataAnimales= await get('products')
      setAnimales(dataAnimales)
      console.log(dataAnimales);
    
    }

const cambiarEstado=(animal)=>{

  setEditando(!editando)
setId(animal)

}

const borrar=(animal)=>{
  setEliminar(!eliminar)
  setId(animal)
  Delete('products/',animal)
  setEditando(!editando)
  setEditando(!editando)
  console.log('se ejecuto hasta aca');
 
  }


    return (
      
      <div className="cuadricula">
          { editando?<Editar animal={id} cambio={setEditando} />:<></>}
          {animales.map(animal => (
            <div key={animal.id}>
                <img src={animal.imagen} alt={animal.descripcion} />
                <p>{animal.descripcion}</p>
                <p>{animal.fecha}</p>
                <p>{animal.tamaño}</p>
                <p>{animal.raza}</p>
                <button onClick={()=>{borrar(animal.id)}}>X</button>
                <button onClick={()=>{cambiarEstado(animal)}}>EDITAR</button>       
                </div> 
          ))}
    
        </div>
      );
}
export default Visualizacion