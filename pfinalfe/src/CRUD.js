async function GetRegistro() {
          
    try {
      let tarea = {

      }
      const respuesta = await fetch('http://localhost:3000/api/task', {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(tarea)
      })
      let agregar = await respuesta.json()
      console.log(agregar);
      console.log(`La tarea ${tarea.id} fue agregada`);
  } catch (error) {
      console.error(error);
  }
}

export default GetRegistro
  