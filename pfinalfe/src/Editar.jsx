import { put } from "./hooks/useFecht"

function Editar() {

    const [fecha,setFecha] =useState(new Date())
    const [descripcion,setDescripcion]= useState('')
    const [selectedImage, setSelectedImage] = useState(null);

    const editar =()=>{
        const user={
            imagen:selectedImage,
            fecha:fecha.toLocaleDateString(),
            descripcion:descripcion
        }
    put('products',user)
    }
    

  return (
    <div>
      <input type="file" placeholder="cambiar imagen" onChange={handleImageChange}/>
      <img src={selectedImage}/>
          <DatePicker selected={fecha}  placeholder="cambiar fecha" onChange={(date) => setFecha(date)} />
      <input type="text" placeholder="cambiar descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>
      <p>Si desea que la informacion se actualice dele click al boton</p>
      <button onClick={editar}>cambiar informacion</button>
    </div>
  )
}

export default Editar
