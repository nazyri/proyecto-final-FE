
import "./styles/Principal.css"
import { useState } from "react"
import Visualizacion from "./Visualizacion"
import ListaAdopcion from "./ListaAdopcion"
import { useNavigate } from "react-router-dom"

function Principal() {

  const [mostrarAnimales,setMostrarAnimales]=useState(false)
  const [mostrarLista,setMostrarLista]=useState(false)

  const nav= useNavigate();

return (
  <>
      <nav className="nav">
      <div className="contTitulos">
        <button className="destacadaGrande" onClick={()=>nav('/destacada')}>seccion destacada</button>
       
        <button className="destacadaGrande" onClick={()=>nav('/canino')}>Canino</button>

        <button className="destacadaGrande" onClick={()=>nav('/felino')}>Felino</button>

        <button className="destacadaGrande" onClick={()=>nav('/contactarnos')}>Contactenos</button>

 
      </div>
      
      <button className="BotonMostrar" onClick={()=>setMostrarAnimales(!mostrarAnimales)}>Mostrar Mascotas</button>
      </nav>{mostrarAnimales?<Visualizacion/>:<div>


      <p>si desea ver los animales que estan en adopcion dele click al siguiente boton</p>
        <button onClick={()=>setMostrarLista(!mostrarLista)}>Ver lista de adopcion</button>
        <nav/>{mostrarLista?<ListaAdopcion/>:<div></div>}

     <p>Vision: la vision de esta empresa es que las personas pongan en adopcion a los animales de las calles para que encuentren un hogar</p>
      <p>Objetivo: el objetivo es poder encontrarles un hogar </p>
      </div>}
      </>
    )
  }
  
  
  export default Principal