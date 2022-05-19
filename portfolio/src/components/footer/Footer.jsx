import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#logo" className='footer__logo'>OCEANE</a>
      <ul className="permalinks">
        <li><a href="#header">Profile</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"> <AiOutlineInstagram/> </a>
        <a href="https://linkedin.com"> <AiFillLinkedin/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OCEANE. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer