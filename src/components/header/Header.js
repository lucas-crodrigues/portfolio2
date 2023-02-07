import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/lucas.png'

const Header = () => {
  return (
      <section id='home'>
        <div className='container header-container'>
          <div>
            <h5>Hello I'm</h5>
            <h1>Lucas Rodrigues</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
          </div>
          <div className='header-photo'>
            <img src={me} alt='Picture of myself'/>
          </div>
        </div>
      </section>
    )
}

export default Header