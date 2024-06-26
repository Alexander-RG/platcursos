"use client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./CabeceraLista";
import InfoTarea from "./InfoTarea";
import RegistrarUsuario from "./RegistrarUsuario";
import Cabecera from "./Cabecera";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
const MisRutas=()=>{
return(
<BrowserRouter>
<div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/infotarea" element={<InfoTarea/>}/>
        <Route path="/registrar" element={<RegistrarUsuario/>}/>
        <Route path="/cabecera" element={<Cabecera/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
    </Routes>
</div>

</BrowserRouter>
)
}
export default MisRutas;