// import { get } from "./hooks/useFecht"
import "./styles/Principal.css"
import { useState } from "react"
import Visualizacion from "./Visualizacion"
import ListaAdopcion from "./ListaAdopcion"
// import SeccionDestacada from "./SeccionDestacada"
import { useNavigate } from "react-router-dom"



function Principal() {
  const [buscar,setBuscar] =useState('')
  const [mostrarAnimales,setMostrarAnimales]=useState(false)
  const [mostrarLista,setMostrarLista]=useState(false)
  const [mostrarCanino,setMostrarCanino]=useState(false)
  const [mostrarFelino,setMostrarFelino]=useState(false)
  const nav= useNavigate();

  const espacios = () => {
      // console.log("nombre", nombre.current.value)
      if (!buscar.trim) {
          alert("espacios vacios")
      } 
      }

return (
  <>
      <nav className="nav">
      <div className="contTitulos">
        <button className="destacadaGrande" onClick={()=>nav('/destacada')}>seccion destacada</button>
       
        <button className="destacada" onClick={()=>setMostrarCanino(!mostrarCanino)}>Canino</button>
        {mostrarCanino?<Canino/>:<div></div>}
        <button className="destacada" onClick={()=>setMostrarFelino(!mostrarFelino)}>Felino</button>
        {mostrarFelino?<Felino/>:<div></div>}
        <button className="destacada" onClick={espacios}>Buscar</button>
        <input className="input" type="text" placeholder="Que busca" onChange={(e)=>setBuscar(e.target.value)}/>
      </div>
      
      <button className="BotonMostrar" onClick={()=>setMostrarAnimales(!mostrarAnimales)}>Mostrar Mascotas</button>
      </nav>{mostrarAnimales?<Visualizacion/>:<div>
      <p>Si desea adoptar una mascota puede contactarnos por los siguientes medios</p>
      <button>instagram: ...</button>
      <button>Telefono: ...</button>
      <button>Correo: ...</button>
      <p>Si desea poner una mascota en adopcion dele click al sigiente boton</p>
      <button onClick={("/adopcion")}>Continuar</button>
      <p>si desea ver los animales que estan en adopcion dele click al siguiente boton</p>
        <button onClick={()=>setMostrarLista(!mostrarLista)}>Ver lista de adopcion</button>
        <nav/>{mostrarLista?<ListaAdopcion/>:<div></div>}
      </div>}
      </>
    )
  }
  
  
  export default Principal