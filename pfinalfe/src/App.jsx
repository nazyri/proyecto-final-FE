// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import AuthPage from './componentesApp/AuthPage'
// import LoginForm from './LoginForm'
// import RegistrationForm from './RegistrationForm'
import Login from './Login'
import Principal from './Principal'
import Registro from './Registro'
import Contactos from './Contactos'
import Adopcion from './Adopcion'


function App() {

  return (
    <>
    <Registro/>
    <Login/>
    <Principal/>
    <Adopcion/>
    <Contactos/>
    {/* <AuthPage/>
    <LoginForm/>
    <RegistrationForm/> */}
    </>
  )
}

export default App
