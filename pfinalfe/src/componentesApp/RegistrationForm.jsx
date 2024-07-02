import { useState } from 'react';

const RegistrationForm = ( handleRegister ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar validaciones adicionales si es necesario
    handleRegister(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
