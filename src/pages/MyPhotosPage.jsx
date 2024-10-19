import React from "react";
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { FavoritesComponent } from "../components/FavComponent/FavComponent";

export const MyPhotosPage = () => {

    return (
<>
<NavbarComponent />
<FavoritesComponent />  
    <FooterComponent />
    </>)
}