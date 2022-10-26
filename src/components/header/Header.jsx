import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/img.jpg'
const Header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>
        Hello I'm
      </h5>
      <h1>Himanshi</h1>
      <h5 className="text-light">
        Fullstack Developer
      </h5>
      <CTA/>
      <HeaderSocials/>
      <div>
            <img className="me" src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header