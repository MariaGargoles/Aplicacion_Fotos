import { useDispatch } from 'react-redux'
import { GetSearchPhotoThunk, GetImagesThunk } from "../../feature/photos/PhotoThunk"
    
 
    

export const SearchComponent = ({ isSearchPage, id, authorName, image, description, width, height, likes, date, downloadLink, setImageAdded }) => {
    
        const dispatch = useDispatch()
    
        const submitSearchHandler = (event) => {
            if (event.key === 'Enter') {
                if (event.target.value !== '') {
                    dispatch(GetSearchPhotoThunk(event.target.value))
                } else {
                    dispatch(GetImagesThunk())
                }
            }
        }
    
    
        return (
            <div className='InputComponent'>
                <input type = 'text' placeholder = 'search photos in the gallery' className="InputComponent__content" onKeyDown={submitSearchHandler}/>
                <span className='material-symbols-outlined InputComponent__content__icon'>search</span>
            </div>
        )
    }
   

