import React from 'react';
import '../styles/Navbar.css';


function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='navbar'>
            <ul className='nav nav-links'>
                <li className='nav-item'>
                    <a href='#home' onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >About Me|</a>
                </li>
                <li className='nav-item'>
                    <a href='#contact' onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact|</a>
                </li>
                <li className='nav-item'>
                    <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio</a>
                </li>
            </ul>
        </div>
        
    );
}

export default Navbar;