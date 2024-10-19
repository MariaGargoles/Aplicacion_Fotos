import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IconsFavoriteComponent } from '../IconFavComponent/IconFavComponent';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import "../ImagesComponent/PhotosComponent.css";

export const FavoritesComponent = () => {
  const favorites = useSelector((state) => state.favorite.data);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (favorites.length === 0) {
    return <p>No favorites added yet.</p>;
  }

  const openModalHandler = (image) => {
    setSelectedImage(image);
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
    setSelectedImage(null); 
  };

  return (
    <div className="image-list">
      {favorites.map((favorite, index) => (
        <div className="ImagesContainer" key={index}>
          <img 
            src={favorite.image} 
            alt={favorite.description} 
            className="ImagesContainer__img"
            width={favorite.width}
            height={favorite.height}
            onClick={() => openModalHandler(favorite)} // Abre el modal al hacer clic en la imagen
          />
          <div className="ImagesContainer__data">
            <p className="data__text">
              <strong>Likes:</strong> {favorite.likes}
            </p>
            <p className="data__text">
              <strong>Date:</strong> {favorite.date}
            </p>
            <IconsFavoriteComponent
              image={favorite.image}
              id={favorite.id}
              description={favorite.description}
              likes={favorite.likes}
              date={favorite.date}
              width={favorite.width}
              height={favorite.height}
              openModal={() => openModalHandler(favorite)}
            />
          </div>
        </div>
      ))}

      {isOpenModal && selectedImage && (
        <ModalComponent
          isOpen={isOpenModal}
          onClose={closeModalHandler}
          description={selectedImage.description}
          width={selectedImage.width}
          height={selectedImage.height}
          likes={selectedImage.likes}
          date={selectedImage.date}
          onSubmit={(event) => {
            event.preventDefault();
            const value = event.target.elements[0].value;
            console.log("New description:", value);
            closeModalHandler();
          }}
        />
      )}
    </div>
  );
};
