import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { GetImagesThunk } from "../feature/photos/PhotoThunk";
import { ImageComponent } from "../components/ImagesComponent/PhotosComponent";

export const IndexPage = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.Myphoto.data);  // Cambiado aquí
    const imagesStatus = useSelector(state => state.Myphoto.status);  // Cambiado aquí
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (imagesStatus === 'idle') {
            dispatch(GetImagesThunk());
        } else if (imagesStatus === 'pending') {
            setLoading(true);
        } else if (imagesStatus === 'fulfilled') {
            setLoading(false);
        }
    }, [imagesStatus, dispatch]);

    return (
        <>
            <NavbarComponent />
            <HeaderComponent />
            <div className="image-list">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    images.map((image, index) => (
                        <ImageComponent 
                            isSearchPage={true} 
                            id={image.id} 
                            authorName={image.user.name} 
                            image={image.urls.small} 
                            description={image.alt_description} 
                            width={image.width} 
                            height={image.height} 
                            likes={image.likes} 
                            date={image.created_at} 
                            downloadLink={image.urls.full} 
                            key={index}
                        />
                    ))
                )}
            </div>
            <FooterComponent />
        </>
    );
};
