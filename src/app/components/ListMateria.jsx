import React from 'react';
import "./Project.css";
import { useNavigate } from 'react-router-dom';
const ListMateria = () => {
    const navigate=useNavigate();
  const data = [
    { 
      image: 'imagen1.jpg',
      title: 'Título de la Imagen 1'
    },
    { 
      image: 'imagen2.jpg',
      title: 'Título de la Imagen 2'
    },
    { 
      image: 'imagen3.jpg',
      title: 'Título de la Imagen 3'
    }
  ];
const LlevarMateria=(index)=>{
navigate('/infotarea');
}
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="box" onClick={LlevarMateria}>
          <img src={item.image} alt={item.title} className="image" />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ListMateria;