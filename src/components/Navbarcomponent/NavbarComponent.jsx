import '.navarComponent,css'


export const NavbarComponent = () => {

    return (
        <nav className='NavarContainer'> 
            <div className='NavarContainerimg'>
                <img className='NavarContainer__imagen1'/>
                <h2>All Photos</h2>
            </div>
            <ul className='NavarContainer__Menu'>
                <NavLink  to="/" className='NavarContainer__Menu--item'>Home</NavLink >
                <NavLink  to="/MyPhotos" className='NavarContainer__Menu--item'>My Photos</NavLink>
            </ul>

        </nav>
    )
}