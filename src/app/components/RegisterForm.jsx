// components/RegisterForm.jsx
"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import firebase from '../database/Firebase'; // Import your firebase.js file

const RegisterForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
      // User registered successfully
      // You can redirect or show a success message here
        navigate('/login');
    } catch (error) {
      // Handle registration error (show error message, etc.)
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Registrarme</button>
    </form>
  );
};

export default RegisterForm;
