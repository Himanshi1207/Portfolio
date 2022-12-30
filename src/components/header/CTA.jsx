import React, { useEffect, useState } from 'react'
import CV from '../../assets/Himanshi_resume.pdf'
const CTA = () => { 
  const [theme, setTheme]=useState("light_theme");
  const toggleTheme=()=>{
    // alert("hi")
    theme==="light_theme"?setTheme("dark_theme"):setTheme("light_theme")
  }
  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary '>Let's Talk</a>
        <a href="#" className='btn' onClick={()=>toggleTheme()}>{theme==='light_theme'?'Dark Mode':'Light Mode'}</a>
        {/* <a href="https://www.behance.net/himanshikanojia" className='toggle' target="_blank"><AiFillBehanceCircle/></a> */}
    </div>
  )
}

export default CTA