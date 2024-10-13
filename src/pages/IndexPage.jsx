import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { GetImagesThunk } from "../feature/photos/PhotoThunk";
import { ImageComponent } from "../components/ImagesComponent/PhotosComponent";
import "../components/ImagesComponent/PhotosComponent.css"
<<<<<<< HEAD

=======
>>>>>>> b6a763cf9c8175fc66e26dfc1c5041da70714b28

export const IndexPage = () => {
  
    return (
        <>
            <NavbarComponent />
            <HeaderComponent />
            <ImageComponent />
          
            <FooterComponent />
        </>
    );
};
