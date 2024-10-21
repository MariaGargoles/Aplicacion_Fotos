import React from "react";
import { NavLink } from 'react-router-dom';

import "./HeaderComponent.css"


export const HeaderComponent = () => {
return(
<main className="Header">
    
    
    <article className="Header__Article">
        <h2 className="Header__Article__MainTitle">Discover and Manage Your Images </h2>
        <p className="Header__Article__Text">Increíble galería de imágenes para descargar.
        Contamos con más de 1 millón de imágenes gracias a Unplash.</p>
        <NavLink to={"/MyPhotos"}><button className="Header__Article__MyPhotosButton">My Photos</button></NavLink>
    </article>
    
</main>

)}