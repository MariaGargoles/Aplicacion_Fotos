import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFavorite, editDescription } from "../../feature/favorite/FavoriteSlice";
import { toast } from "sonner";
import { saveAs } from 'file-saver';
import './IconsComponent.css'; 

export const IconsFavoriteComponent = ({ image, id, description, likes, date, width, height, openModal }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(true);

  const RemoveFavoriteHandler = () => {
    dispatch(removeFavorite(id));
    toast.success('Removed successfully!');
    setIsFavorite(false); 
  };

  return (
    <div className="IconsComponent">
      {isFavorite ? (
        <span className="material-icons IconsComponent__Icon" onClick={RemoveFavoriteHandler}>
          favorite
        </span>
      ) : (
        <span className="material-icons IconsComponent__Icon">
          favorite_border
        </span>
      )}
      <span className="material-icons IconsComponent__Icon" onClick={openModal}>edit</span>
      <span className="material-icons IconsComponent__Icon" onClick={() => saveAs(image)}>download</span>
    </div>
  );
};
