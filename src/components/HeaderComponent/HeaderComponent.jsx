import React from "react";
import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
return(
<header>
    <h2>Discover and Manage Your Images </h2>
    <p>Increíble galería de imágenes para descargar.
    Contamos con más de 1 millón de imágenes gracias a Unplash.</p>
    <NavLink to={"/MyPhotos"}><button>My Photos</button></NavLink>

</header>

)}