import React from 'react';
import "../css/Cabecera.css";
const Cabecera = () => {
  const empresa = "Nombre de la Empresa";
  const usuario = "Nombre de Usuario";

  return (
    <header>
      <h1>{empresa}</h1>
      <div class="user-info">
        <div class="user-image"></div>
        <p>Información del Usuario: {usuario}</p>
      </div>
      <div class="button-container">
        <button>Botón 1</button>
        <button>Botón 2</button>
        <button>Botón 3</button>
      </div>
    </header>
  );
}

export default Cabecera;