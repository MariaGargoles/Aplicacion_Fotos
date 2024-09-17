import './NavbarComponent.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const NavbarComponent = () => {

    return (
        <nav className='NavarContainer'> 
            
            <div className='NavarContainerimg'>
                <img src={logo} alt="Logo" className='NavarContainer__imagen1' />
                <h1 className='NavarContainer__MainTitle'>image galery</h1>
            </div>
            <ul className='NavarContainer__Menu'>
                <NavLink  to="/" className='NavarContainer__Menu--item'>Home</NavLink >
                <NavLink  to="/MyPhotos" className='NavarContainer__Menu--item'>My Photos</NavLink>
            </ul>

        </nav>
    )
}