import "./styles/Visualizacion.css"
import { get } from "./hooks/useFecht"
import { useState, useEffect } from "react"
const Visualizacion=()=>{

    const [animales,setAnimales]=useState([])


    useEffect(()=>{
    console.log('Se ejecuta UseEffect');
    getProducts()
    },[])


    let getProducts=async()=>{
  
      const dataAnimales= await get('products')
      setAnimales(dataAnimales)
      console.log(dataAnimales);
    
    }

    return (
        <div className="cuadricula">
          {animales.map(animal => (
            <div key={animal.id}>
                <img src={animal.imagen} alt={animal.descripcion} />
                <p>{animal.descripcion}</p>
                <p>{animal.fecha}</p>
                <p>{animal.tamaño}</p>
                <p>{animal.raza}</p>
                
                
                </div> 
          ))}
        </div>
      );
}
export default Visualizacion