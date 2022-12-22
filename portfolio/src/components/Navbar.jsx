import React from 'react';
import '../styles/Navbar.css';
import { handlePageChange } from '../App'
// import Contact from '../pages/Contact';


//get this to link to diff components with onclick()
const Navbar = ({ currentPage, handlePageChange}) =>  {
    return (
        
            <ul className='nav-links'>
                <li className='nav-item'>
                    <a href='#home' onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >About Me</a>
                </li>
                <li className='nav-item'>
                    <a href='#contact' onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact</a>
                </li>
                <li className='nav-item'>
                    <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio</a>
                </li>
            </ul>
        
    );
}

export default Navbar;