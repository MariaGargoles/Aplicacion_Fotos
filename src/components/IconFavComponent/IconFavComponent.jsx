import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeFavorite, addFavorite } from "../../feature/favorite/FavoriteSlice";
import { toast } from "sonner";
import { saveAs } from 'file-saver';
import './IconsComponent.css'; 

export const IconsFavoriteComponent = ({ image, id, description, likes, date, width, height, openModal }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  // Comprobamos si la imagen ya está en favoritos al cargar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = favorites.some(fav => fav.id === id);
    setIsFavorite(isAlreadyFavorite);
  }, [id]);

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
      toast.success('Removed from favorites!');
      setIsFavorite(false);
    } else {
      const favoriteImage = { id, image, description, likes, date, width, height };
      dispatch(addFavorite(favoriteImage)); 
      toast.success('Added to favorites!');
      setIsFavorite(true);
    }
  };

  return (
    <div className="IconsComponent">
      <span className="material-icons IconsComponent__Icon" onClick={toggleFavoriteHandler}>
        {isFavorite ? 'favorite' : 'favorite_border'}
      </span>
      <span className="material-icons IconsComponent__Icon" onClick={openModal}>edit</span>
      <span className="material-icons IconsComponent__Icon" onClick={() => saveAs(image)}>download</span>
    </div>
  );
};
