import { useState } from 'react';
import './modalComponent.css';
import { useDispatch } from 'react-redux';
import { modifyDescription } from '../../Features/Favorites/FavoritesSlice';

 export const ModalComponent = ({ className, id, description, width, height, likes, date }) => {
    
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modifyDescriptionClassName, setModifyDescriptionClassName] = useState('pop-up-modal__modify-description');
    const [buttonClassName, setButtonClassName] = useState('pop-up-modal__button-container');
    const [imageDescription, setImageDescription] = useState(description);

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    const openModalHandler = () => {
        setIsModalOpen(true);
    }

    const openModifyDescriptionTextField = () => {
        setModifyDescriptionClassName('pop-up-modal__modify-description pop-up-modal__modify-description--open');
        setButtonClassName('pop-up-modal__button-container--closed');
    }

    const closeModifyDescriptionTextField = () => {
        setModifyDescriptionClassName('pop-up-modal__modify-description');
        setButtonClassName('pop-up-modal__button-container');
    }

    const modifyDescriptionHandler = (event) => {
        event.preventDefault();
        const newDescription = event.target.elements[0].value;
        dispatch(modifyDescription({ id: id, description: newDescription }));
        setImageDescription(newDescription);
        setModifyDescriptionClassName('pop-up-modal__modify-description');
        setButtonClassName('pop-up-modal__button-container');
    }

    return (
        <>
        <button onClick={openModalHandler} className="open-modal-button">Open</button>
        {isModalOpen && (
            <div className={className} id="pop-up-modal">
                <p className="pop-up-modal__title"><strong>Information</strong></p>
                <span onClick={closeModalHandler} className="pop-up-modal__close material-symbols-outlined" id="pop-up-modal__close">
                    close
                </span>
                <p className="pop-up-modal__description-title"><strong>Description:</strong></p>
                <p className="pop-up-modal__description">"{imageDescription}"</p>
                <div className={buttonClassName}>
                    <button onClick={openModifyDescriptionTextField} className="pop-up-modal__button-container__button" type="button">Edit</button>
                </div>
                <form onSubmit={modifyDescriptionHandler} className={modifyDescriptionClassName}>
                    <p className='pop-up-modal__modify-description__title'>New description:</p>
                    <span onClick={closeModifyDescriptionTextField} className="pop-up-modal__modify-description__close material-symbols-outlined" id="pop-up-modal__modify-description__close">
                        close
                    </span>
                    <textarea className='pop-up-modal__modify-description__input'/>
                    <div className='pop-up-modal__modify-description__button-container'>
                        <button className='pop-up-modal__modify-description__button-container__button' type="submit">Submit</button>
                        <a className="pop-up-modal__modify-description__button-container__cancel" onClick={closeModifyDescriptionTextField}>Cancel</a>
                    </div>
                </form>
                <p className="pop-up-modal__property"><strong>Width:</strong> {width}</p>
                <p className="pop-up-modal__property"><strong>Height:</strong> {height}</p>
                <p className="pop-up-modal__property"><strong>Likes:</strong> {likes}</p>
                <p className="pop-up-modal__property"><strong>Addition date:</strong> {date}</p>
            </div>
        )}
        </>
    )
}

export default ModalComponent;
