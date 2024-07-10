import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registro from './Registro.jsx'
import Login from './Login.jsx'
import Principal from './Principal.jsx'
import ListaAdopcion from './ListaAdopcion.jsx'
import Adopcion from './Adopcion.jsx'
import SeccionDestacada from './SeccionDestacada.jsx'
import Editar from './Editar.jsx'
import Canino from './Canino.jsx'
import Felino from './Felino.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Registro/>
  },
  
  {
    path:"/Login",
    element: <Login/>
  },
  {
    path:"/principal",
    element: <Principal/>
  },
  {
    path:"/ListaAdopcion",
    element: <ListaAdopcion/>
  },
  {
    path:"/Adopcion",
    element: < Adopcion/>
  },
  {
    path: "/destacada", 
    element: <SeccionDestacada/> 
  },
  {
    path: "/editar", 
    element: <Editar/> 
  },
  {
    path: "/canino", 
    element: <Canino/> 
  },
  {
    path: "/felino", 
    element: <Felino/> 
  },
  {
    path:"/Contactos",
    // element: <Contactos/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
