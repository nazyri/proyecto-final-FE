// import { get } from "./hooks/useFecht"
import "./styles/Principal.css"
import { useState } from "react"
import Visualizacion from "./Visualizacion"
import ListaAdopcion from "./ListaAdopcion"


function Principal() {
  const [buscar,setBuscar] =useState('')
  const [mostrarAnimales,setMostrarAnimales]=useState(false)
  const [mostrarLista,setMostrarLista]=useState(false)
  const [mostrarDestacados,setMostrarDestacados]=useState(false)
  const [mostrarCanino,setMostrarCanino]=useState(false)
  const [mostrarFelino,setMostrarFelino]=useState(false)

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
        <button className="destacadaGrande" onClick={()=>setMostrarDestacados(!mostrarDestacados)}>seccion destacada</button>
        {mostrarDestacados?<Destacada/>:<div></div>}
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

   // const tareasFiltradas = data.filter(tarea => tarea.nombre === nombre);

    
  //   if (tareasFiltradas.length === 0) {
  //     // Muestra la tarea no encontrada
  //   alert("No hay tareas con ese nombre.");
  // } else {
    
  //   // Muestra la tarea encontrada
  // tareasFiltradas.forEach(tareaFiltrada => {
  //         alert(`Se encontro la tarea "${tareaFiltrada.nombre}"`);
  //       });
      
  //     //Al darle click muestra la tarea encontrada
  //   btnBuscar.addEventListener("click", () => {
  //     buscarTarea(barraBusqueda.value);
  //   });
  // }