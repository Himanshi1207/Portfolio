import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ShakesJeer.jpg'
import IMG2 from '../../assets/music-01.png'
import IMG3 from '../../assets/snakeGame-01.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'ShakesJeer',
    github:'https://github.com/unnatmittal/shakesJeer-complied',
    demo:'https://shakesjeer.com/',
    tech:['ReaactJs', 'Figma']
  },
  {
    id:2,
    image:IMG2,
    title:'MusicOn-A Spotify Clone',
    github:'https://github.com/Himanshi1207/MusicOn',
    demo:'https://himanshi1207.github.io/MusicOn/',
    tech:['HTML', 'CSS','Javascript']
  },
  {
    id:3,
    image:IMG3,
    title:'Snake Game',
    github:'https://github.com/Himanshi1207/SnakeGame',
    demo:'https://himanshi1207.github.io/SnakeGame/',
    tech:['HTML', 'CSS','Javascript']
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo,tech})=>{
            return(

              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank' >Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio