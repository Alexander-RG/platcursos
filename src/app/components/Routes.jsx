"use client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./CabeceraLista";
import InfoTarea from "./InfoTarea";

const MisRutas=()=>{
return(
<BrowserRouter>
<div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/infotarea" element={<InfoTarea/>}/>

    </Routes>
</div>

</BrowserRouter>
)
}
export default MisRutas;