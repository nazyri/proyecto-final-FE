import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef } from "react"
import { post } from "./hooks/useFecht"



function Adopcion() {

    const [fecha,setFecha] =useState(new Date())
    const [raza,setRaza] =useState('')
    const [descripcion,setDescripcion]= useState('')
    const [selectedImage, setSelectedImage] = useState(null);
  
    const razaRef = useRef();
    const descripcionRef = useRef();
    
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

      const razaTrim = razaRef.current.value
      const descripcionTrim = descripcionRef.current.value
        
        if ( !razaTrim || !descripcionTrim) {
          alert("espacios vacios")
          return
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
          <DatePicker selected={fecha} placeholder="ingrese la fecha" onChange={(date) => setFecha(date)} />
      <input type="text" ref={razaRef} placeholder="Que raza es" onChange={(e)=>setRaza(e.target.value)}/>
      <input type="text" ref={descripcionRef} placeholder="Agregue una descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>
      <button onClick={()=>Adopcion(espacios)}>Poner en adopcion</button>


      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      
      </>
    )
  }
  
  export default Adopcion
  