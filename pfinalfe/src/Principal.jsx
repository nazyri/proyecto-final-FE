// import { get } from "./hooks/useFecht"
import "./styles/Principal.css"
import { useState } from "react"
import Visualizacion from "./Visualizacion"
import ListaAdopcion from "./ListaAdopcion"
import { useNavigate } from "react-router-dom"





function Principal() {

  
  // const [buscar, setBuscar] = useState('');
  const [mostrarAnimales,setMostrarAnimales]=useState(false)
  const [mostrarLista,setMostrarLista]=useState(false)

      
  
  const nav= useNavigate();

//   const espacios = () => {
//     if (!buscar.trim()) {
//         alert("Por favor ingrese un término de búsqueda");
//     } else {
//         // Lógica para manejar la búsqueda
//     }
// };



return (
  <>
      <nav className="nav">
      <div className="contTitulos">
        <button className="destacadaGrande" onClick={()=>nav('/destacada')}>seccion destacada</button>
       
        <button className="destacadaGrande" onClick={()=>nav('/canino')}>Canino</button>

        <button className="destacadaGrande" onClick={()=>nav('/felino')}>Felino</button>

        <button className="destacadaGrande" onClick={()=>nav('/contactarnos')}>Contactenos</button>

        {/* <button className="destacada" onClick={espacios}>Buscar</button>
        <input type="text" className="buscar" placeholder="Que buscar" value={buscar} onChange={(e)=>setBuscar(e.target.value)}/>

        <input className="input" type="text"/> */}
      </div>
      
      <button className="BotonMostrar" onClick={()=>setMostrarAnimales(!mostrarAnimales)}>Mostrar Mascotas</button>
      </nav>{mostrarAnimales?<Visualizacion/>:<div>
      {/* <p>Si desea adoptar una mascota puede contactarnos por los siguientes medios</p>
      <button>instagram: ...</button>
      <button>Telefono: ...</button>
      <button>Correo: ...</button> */}

      <p>si desea ver los animales que estan en adopcion dele click al siguiente boton</p>
        <button onClick={()=>setMostrarLista(!mostrarLista)}>Ver lista de adopcion</button>
        <nav/>{mostrarLista?<ListaAdopcion/>:<div></div>}
      </div>}
      </>
    )
  }
  
  
  export default Principal