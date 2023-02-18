import React from 'react';
import '../styles/Navbar.css';
import resume from '../assets/images/resume.pdf';


function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='navbar'>
            <h1>Karen Adkins</h1>
            <ul className='nav nav-links'>
                <li className='nav-item'>
                    <a href='#home' onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >About Me||</a>
                </li>
                <li className='nav-item'>
                    <a href='#TechSkills' onClick={() => handlePageChange('TechSkills')}
                    className={currentPage === 'TechSkills' ? 'nav-link active' : 'nav-link'}
                    >TechSkills||</a>
                </li>
                <li className='nav-item'>
                    <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio||</a>
                </li>
                <li className='nav-item'>
                    <a href={resume}>Resume</a>
                    {/* <a href='#resume' onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume</a> */}

                </li>
            </ul>
            <h2>Full Stack Web Developer<br></br>
                MERN-Certified
            </h2>
        </div>
        
    );
}

export default Navbar;