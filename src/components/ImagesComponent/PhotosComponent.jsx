import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import './PhotosComponent.css';
import { GetImagesThunk, GetSearchPhotoThunk } from '../../feature/photos/PhotoThunk';

export const ImageComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.Myphoto.data);  
  const imagesStatus = useSelector((state) => state.Myphoto.status);  
  const [searchTerm, setSearchTerm] = useState(""); 

  
  const submitSearchHandler = (event) => {
    if (event.key === 'Enter') {
      if (searchTerm.trim() !== '') {
        dispatch(GetSearchPhotoThunk(searchTerm));
      } else {
        dispatch(GetImagesThunk());
      }
    }
  };

 
  useEffect(() => {
    if (imagesStatus === 'idle') {
      dispatch(GetImagesThunk());
    }
  }, [imagesStatus, dispatch]);

  return (
    <div>

      <div className='InputComponent'>
        <input 
          type='text' 
          placeholder='Search photos in the gallery' 
          className="InputComponent__content" 
          onKeyDown={submitSearchHandler}
          onChange={(e) => setSearchTerm(e.target.value)} 
          value={searchTerm}
        />
        <span className='material-symbols-outlined InputComponent__content__icon'>search</span>
      </div>

      
      <div className="image-list">
        {imagesStatus === 'pending' ? (
          <p>Loading...</p>
        ) : images.length > 0 ? (
          images.map((image, index) => (
            <div className="ImagesContainer" key={index}>
              <img 
                className="ImagesContainer__img" 
                src={image.urls.regular} 
                alt={image.alt_description || 'Image'} 
                width={image.width} 
                height={image.height} 
              />
              <div className="ImagesContainer__data">
                <p className='data__text'><strong>Author:</strong> {image.user.name}</p>
                <p className='data__text'><strong>Likes:</strong> {image.likes}</p>
                <p className='data__text'><strong>Date:</strong> {new Date(image.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No images found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};
