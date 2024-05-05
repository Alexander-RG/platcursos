import { useNavigate } from "react-router-dom";
import "./InfoTarea.css";
const InfoTarea = () => {
    const navigate=useNavigate();
    const regresar=()=>{
        navigate('/');
    }
        return (
            <div class="containerT">
            <img src="ruta_de_la_imagen.png" alt="Imagen de tarea"/>
            <h1>Información de Tarea</h1>
            <p>Descripción de la Tarea</p>
            <p>Fecha de Entrega</p>
            <p>Completado</p>
            <p onClick={regresar}>Acciones</p>
            </div>
        );
    };
    
    export default InfoTarea;