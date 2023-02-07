import React from 'react'
import './about.css'
import About_me from './about_me'
import lucas_about from '../../assets/lucas_about.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='container about-container'>
        <div className='about-picture'>
          <img src={lucas_about} alt='Another picture of me' />
        </div>
        <About_me />
      </div>
    </section>
  )
}

export default About