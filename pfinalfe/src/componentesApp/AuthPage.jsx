import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

const AuthPage = () => {
    const nav = useNavigate()
  const [isLogin, setIsLogin] = useState(true);

nav("/LoginForm")
  const handleLogin = (username, password) => {
    // Aquí puedes implementar la lógica de autenticación
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleRegister = (username, password) => {
    // Aquí puedes implementar la lógica de registro
    console.log(`Registering with username: ${username} and password: ${password}`);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <RegistrationForm handleRegister={handleRegister} />
      )}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;