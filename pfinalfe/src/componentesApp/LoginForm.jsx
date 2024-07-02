import { useState } from 'react';

const LoginForm = (handleLogin) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar validaciones adicionales si es necesario
    handleLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login{handleLogin}</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
