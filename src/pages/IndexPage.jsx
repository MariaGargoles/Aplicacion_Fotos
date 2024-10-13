import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { GetImagesThunk } from "../feature/photos/PhotoThunk";
import { ImageComponent } from "../components/ImagesComponent/PhotosComponent";
import "../components/ImagesComponent/PhotosComponent.css"

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
