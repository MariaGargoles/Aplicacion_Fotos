import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importar dispatch
import { IconsFavoriteComponent } from '../IconFavComponent/IconFavComponent';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import "../ImagesComponent/PhotosComponent.css";
import { editDescription } from '../../feature/favorite/FavoriteSlice'; // Importar la acción de edición

export const FavoritesComponent = () => {
  const dispatch = useDispatch(); // Para despachar acciones
  const favorites = useSelector((state) => state.favorite.data); // Obtener el estado de favoritos de Redux
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (favorites.length === 0) {
    return <p>No favorites added yet.</p>;
  }

  // Abre el modal con la imagen seleccionada
  const openModalHandler = (image) => {
    setSelectedImage(image);
    setIsOpenModal(true);
  };

  // Cierra el modal
  const closeModalHandler = () => {
    setIsOpenModal(false);
    setSelectedImage(null); 
  };

  // Función para actualizar la descripción de una imagen favorita
  const updateDescriptionHandler = (newDescription) => {
    dispatch(editDescription({ 
      id: selectedImage.id, 
      description: newDescription 
    })); // Despachar la acción de editar la descripción
    closeModalHandler(); // Cierra el modal después de guardar los cambios
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
            onClick={() => openModalHandler(favorite)} 
          />
          <div className="ImagesContainer__data">
            <p className="data__text">
              <strong>Likes:</strong> {favorite.likes}
            </p>
            <p className="data__text">
              <strong>Date:</strong> {favorite.date}
            </p>
            <p className="data__text">
              <strong>Description:</strong> {favorite.description}
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
          onSubmit={updateDescriptionHandler} // Pasamos la función para actualizar la descripción
        />
      )}
    </div>
  );
};
