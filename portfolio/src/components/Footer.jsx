import React from 'react';
import { FaStackOverflow } from "react-icons/fa";
import '../styles/Footer.css';
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";


const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://stackoverflow.com/users/19620945/karen-adkins">
      < FaStackOverflow size={70} /> 
      </a>
      <a href='https://github.com/KarenAdkins84'>
      < GoMarkGithub size={70} />
      </a>
      <a href='https://www.linkedin.com/in/karen-adkins-26a825246/'>
      < SiLinkedin size={70} />
      </a>
      
      </div>
  )
}

export default Footer