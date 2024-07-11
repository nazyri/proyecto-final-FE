import { Delete } from "./hooks/useFecht";




 function Eliminar(animal, cambio) {

    const actualizar = async ()=>{
      console.log('se ejecuta');
        const user={
            raza:animal.raza,
            descripcion:animal.descripcion,
            fecha:animal.fecha,
            imagen:animal.imagen

        }
        await Delete ("products/", animal.id, user)
        cambio(false)
    }

  return (
    <div>
      <button type="button" onClick={actualizar}>Eliminar</button>
      
    </div>
  )
}

export default Eliminar