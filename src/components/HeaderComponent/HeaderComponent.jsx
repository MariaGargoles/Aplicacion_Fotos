import React from "react";
import { NavLink } from 'react-router-dom';


export const HeaderComponent = () => {
return(
<header className="">
    <div className="">
    <source src="" autoplay loop></source>
    </div>
    <h2 className="">Discover and Manage Your Images </h2>
    <p className="">Increíble galería de imágenes para descargar.
    Contamos con más de 1 millón de imágenes gracias a Unplash.</p>
    <NavLink className="" to={"/MyPhotos"}><button>My Photos</button></NavLink>

</header>

)}