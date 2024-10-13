//import './ModalComponent.css'
import { useState, useEffect } from 'react';

export const ModalComponent = ({ isOpen, onClose, description, width, height, likes, date, onSubmit }) => {
    const [newDescription, setNewDescription] = useState(description); 

    
    useEffect(() => {
        setNewDescription(description);
    }, [description]);

    const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value); 
    };

    return (
        <>
            {isOpen && (
                <div className="ModalComponent__overlay">
                    <form className='ModalComponent__form' onSubmit={(event) => {
                        event.preventDefault();
                        onSubmit(newDescription); 
                    }}>
                        <div className='ModalComponent'>
                            <span className="material-symbols-outlined ModalComponent__Close" onClick={onClose}>
                                cancel
                            </span>
                            <h2 className="ModalComponent__Title">Description</h2>
                            <textarea
                                className="ModalComponent__Description"
                                value={newDescription} 
                                onChange={handleDescriptionChange}
                                placeholder="Enter a new description"
                            ></textarea>
                            <ul className="ModalComponent__list">
                                <li className="ModalComponent__list__item">
                                    <p className="ModalComponent__list__item__definicion">Width: </p>{width}
                                </li>
                                <li className="ModalComponent__list__item">
                                    <p className="ModalComponent__list__item__definicion">Height: </p>{height}
                                </li>
                                <li className="ModalComponent__list__item">
                                    <p className="ModalComponent__list__item__definicion">Likes: </p>{likes}
                                </li>
                                <li className="ModalComponent__list__item">
                                    <p className="ModalComponent__list__item__definicion">Date: </p>{date}
                                </li>
                            </ul>
                            <button type='submit' className='ModalComponent__form__send'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
