import {React, useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../css/Cabecera.css";
const Cabecera = () => {
  const empresa = "Nombre de la Empresa";
  const location = useLocation();
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    if (location.state){
      setDatos(location.state.userData);
    }}, [location.state]);
  return (
    <header>
      <h1>{empresa}</h1>
      <div class="user-info">
        <div class="user-image"></div>
        {datos? <p>Información del Usuario: {datos.nombre}</p> : <p>Registrate antes!!</p>}
      </div>
      <div class="button-container">
        <button>Botón 1</button>
        <button>Botón 2</button>
        <button>Botón 3</button>
      </div>
      <NavLink to="/registrar">Registrar</NavLink>
    </header>
  );
}

export default Cabecera;