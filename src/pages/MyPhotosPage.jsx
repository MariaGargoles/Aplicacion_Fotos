import React from "react";
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { FavoritePage } from "../components/FavComponent/FavComponent";

export const MyPhotosPage = () => {


    return <>
    <NavbarComponent />
    <FavoritePage />
    <FooterComponent />

    </>
}