import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import styled from "styled-components";
const Login=()=>{
    const navigate=useNavigate();
    const [values,setvalues]=useState({email:'',pass:''});
    const [error,seterror]=useState([]);
    const [submitbutton,setsubmitbutton]=useState(false);
    const Iniciar=()=>{
        if (!values.email || !values.pass) {
            seterror("Datos incompletos");
            return;
        }
        seterror('');
        setsubmitbutton(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setsubmitbutton(false);
            navigate("/");
        })
        .catch((err)=>{
            setsubmitbutton(false);
            seterror(err.message);
        });
    }
return(
    <Formulario>
      <Titulo>Estás en Login</Titulo>
      <div>
        <Etiqueta htmlFor="email">Correo:</Etiqueta>
        <Entrada type="email" name="email" id="email" placeholder="Ingrese su correo"  onChange={(e)=>setvalues((prev)=>({...prev,email:e.target.value}))} />
      </div>
      <div>
        <Etiqueta htmlFor="password">Contraseña:</Etiqueta>
        <Entrada type="password" name="password" id="password" placeholder="Ingrese su contraseña"  onChange={(e)=>setvalues((prev)=>({...prev,pass:e.target.value}))}/>
      </div>
      <div>
        <Error>error: {error}</Error>
        <div>
          <Boton type="submit" disabled={submitbutton} onClick={Iniciar}>Login</Boton>
        </div>
        <Enlace><a href="/nuevousuario">¿Crear una cuenta?</a></Enlace>
      </div>
      <Enlace><NavLink to="/">Home</NavLink></Enlace>
    </Formulario>
    
)
}
const Formulario = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Titulo = styled.h1`
  text-align: center;
`;

const Etiqueta = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Entrada = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Boton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Error = styled.b`
  color: red;
  margin-bottom: 20px;
`;

const Enlace = styled.div`
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;
export default Login;