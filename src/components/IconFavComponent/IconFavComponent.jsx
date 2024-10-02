import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { toast } from "sonner"
import { saveAs } from 'file-saver'

export const IconsFavoriteComponent = (props) => {
    const dispatch = useDispatch()
    const Favorite = useSelector((state) => state.search.data)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const RemoveFavoriteHandler = (event) => {
        event.preventDefault()
        dispatch(removeFavorite(props.id))
        toast.success('Removed successfully!')
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const ModifyDescriptionHandler = (event) => {
        event.preventDefault()
        const value = event.target.elements[0].value
        dispatch(editDescription({ id: props.id, description: value }))
        setIsOpenModal(false)
        toast.success('Updated successfully!')
    }

    const downloadHandler = () => {
        saveAs(props.image)
        toast.success('Downloaded successfully!')
    }

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={RemoveFavoriteHandler}> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={openModal}> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={downloadHandler}> download </span>
            </div>
            {isOpenModal ? (
                <ModalComponent
                    isOpen={isOpenModal}
                    onClose={closeModal}
                    description={props.description}
                    width={props.width}
                    height={props.height}
                    likes={props.likes}
                    date={props.date}
                    onSubmit={ModifyDescriptionHandler}
                />
            ) : <p></p>}
        </>
    )
}