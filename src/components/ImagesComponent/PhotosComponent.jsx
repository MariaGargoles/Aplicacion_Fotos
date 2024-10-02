import React from 'react';
import './PhotosComponent.css'
import { IconsFavoriteComponent } from '../IconFavComponent/IconFavComponent';
export const ImageComponent = ({ 
    id, 
    authorName, 
    image, 
    description, 
    width, 
    height, 
    likes, 
    date, 
}) => {
    return (
        
            <div className="ImagesContainer" key={id}>
            
                <img  className="ImagesContainer__img" src={image} alt={description} width={width} height={height} />
                <div className="ImagesContainer__data">
                    <p><strong>Author:</strong> {authorName}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Likes:</strong> {likes}</p>
                    <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
                    
                </div>
                : 
               {/* <IconsFavoriteComponent 
                    isSearchPage={false} 
                    id={props.id} 
                    image={props.image} 
                    description={props.description} 
                    height={props.height} 
                    width={props.width} 
                    likes={props.likes} 
                    date={props.date}
                />*/}
            
            </div>
        
            
    );
};
