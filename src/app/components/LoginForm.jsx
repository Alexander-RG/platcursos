"use client";
import { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Call your login API here
    console.log('Iniciando Sesion:', loginData);
    // Redirect to dashboard or show error message
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo Electronico"
        value={loginData.email}
        onChange={handleLoginChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={loginData.password}
        onChange={handleLoginChange}
      />
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default LoginForm;
