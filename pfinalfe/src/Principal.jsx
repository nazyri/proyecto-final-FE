import "./styles/Principal.css"


function Principal() {

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

    
      
return (
  <>
      <nav className="nav">
      <h1>
        seccion destacada
        Canino
        Felino
        Tamaños
        Razas
      <input className="input" type="text" placeholder="Que busca"/>
      </h1>
      </nav>
      <p>Si desea adoptar una mascota puede contactarnos por los siguientes medios</p>
      <button>instagram: ...</button>
      <button>Telefono: ...</button>
      <button>Correo: ...</button>
      <p>Si desea poner una mascota en adopcion dele click al sigiente boton</p>
      <button onClick={("/adopcion")}>Continuar</button>
      </>
    )
  }
  
  
  export default Principal
  // boton de contactar en cada imagen 
  //razas de perros 
  //1. Pastor alemán
  // 2. Husky siberiano
  // 3. Golden retriever
  // 4. Bulldog francés
  // 5. Chihuahua
  // 6. Pit bull terrier americano
  // 7. Beagle
  // 8. Mastín
  // 9. Dóberman
  // 10. Rottweiler
  //razas de gatos
  // Persa
  // Azul ruso
  // Siamés
  // Angora turco
  // Siberiano
  // Bengalí
  
  //

    // const espacios = () => {
    //     // console.log("nombre", nombre.current.value)
    //     if (!nombre.trim && !correo.trim && !clave.trim) {
            
    //         nav("/login")
    //     } 
    // }