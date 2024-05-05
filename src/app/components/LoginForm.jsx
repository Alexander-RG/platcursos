// components/LoginForm.jsx

import React, { useState } from 'react';
import firebase from '../firebase'; // Import your firebase.js file

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password);
      // User logged in successfully
      // You can redirect or show a success message here
    } catch (error) {
      // Handle login error (show error message, etc.)
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
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
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
