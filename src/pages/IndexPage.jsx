import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavbarComponent } from "../components/Navbarcomponent/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { GetImagesThunk } from "../feature/Search/SearchThunk";
import { ImageComponent } from "../components/PhotosComponent/PhotosComponent";

export const IndexPage = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images.items);
    const imagesStatus = useSelector(state => state.images.status);
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
