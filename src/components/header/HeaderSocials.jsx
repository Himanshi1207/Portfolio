import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillBehanceCircle} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/himanshi-408000202/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Himanshi1207" target="_blank"><FaGithub/></a>
        <a href="https://www.behance.net/himanshikanojia" target="_blank"><AiFillBehanceCircle/></a>
    </div>
  )
}

export default HeaderSocials