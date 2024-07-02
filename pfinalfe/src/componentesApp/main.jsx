import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthPage from './componentesApp/AuthPage'
// import Registro from './Registro.jsx'
// import Login from './Login.jsx'
// import Principal from './Principal.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <AuthPage/>
  },
  // {
  //   path:"/Login",
  //   element: <Login/>
  // },
  // {
  //   path:"/principal",
  //   element: <Principal/>
  // },
  // {
  //   path:"/adopcion",
  //   element: <Principal/>
  // },
  // {
  //   path:"/contactos",
  //   element: <Principal/>
  // },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)