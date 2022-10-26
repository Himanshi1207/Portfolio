import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Himanshi</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact"></a>Contact</li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://twitter.com"><FiInstagram/></a>
        <a href="https://instagram.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Himanshi All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer