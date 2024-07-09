import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"
import { post } from "./hooks/useFecht"
import { useNavigate } from "react-router-dom"

function Adopcion() {

  
    const nav = useNavigate()
    const [fecha,setFecha] =useState(new Date())
    const [raza,setRaza] =useState('')
    const [descripcion,setDescripcion]= useState('')
    const [selectedImage, setSelectedImage] = useState(null);
  
    
    const Adopcion =()=>{
        const user={
            imagen:selectedImage,
            fecha:fecha.toLocaleDateString(),
            raza:raza,
            descripcion:descripcion
        }

        console.log(user);
        post('products',user)
  
    }
    const espacios = () => {
        // console.log("nombre", nombre.current.value)
        if (!fecha.trim && !raza.trim && !selectedImage.trim && !descripcion.trim) {
            
            nav("/contactos")
        } 
    }

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      
      if (file) {
        // Preview the selected image
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedImage(null);
      }
    };

    return (
      <>
      <ul>Instrucciones </ul>
      <li>Agregue la fecha del dia que lo va a dar en adopcion</li>
      <li>Agregue la imagen de su mascota</li>
      <li>Agregue una descripcion</li>
      <li>Llene el siguiente formulario</li>
      <hr />
      <p>Poner en adopcion a una mascota de la calle</p>
      <input type="file" placeholder="Suba la imagen" onChange={handleImageChange}/>
      <img src={selectedImage}/>
          <DatePicker selected={fecha}  placeholder="ingrese la fecha" onChange={(date) => setFecha(date)} />
      <input type="text" placeholder="Que raza es" onChange={(e)=>setRaza(e.target.value)}/>
      <input type="text" placeholder="Agregue una descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>
      <button onClick={Adopcion}>Poner en adopcion</button>
      <button onClick={espacios}>contactarnos</button>

      
      </>
    )
  }
  
  export default Adopcion
  