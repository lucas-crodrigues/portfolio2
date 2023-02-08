import React from 'react'
import './about.css'
import AboutMe from './about_me'
import lucas_about from '../../assets/lucas_about.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='container about-container'>
        <div className='about-picture'>
          <img src={lucas_about} alt='Me' />
        </div>
        <AboutMe />
      </div>
    </section>
  )
}

export default About