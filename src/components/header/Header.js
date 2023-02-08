import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/lucas.png'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMedium } from 'react-icons/ai'
import { SiAngellist } from 'react-icons/si'

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
          <div className='header'>
            <div className='header-photo'>
              <img src={me} alt='Me'/>
            </div>
            <div className='header-socials'>
              <a href='https://github.com/lucas-crodrigues' target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
              <a href='https://www.linkedin.com/in/lucascostarodrigues/' target='_blank' rel="noreferrer"><AiOutlineLinkedin /></a>
              <a href='https://angel.co/u/lucascostarodrigues' target='_blank' rel="noreferrer"><SiAngellist /></a>
              <a href='https://twitter.com/lcrodrigues58' target='_blank' rel="noreferrer"><AiOutlineTwitter /></a>
              <a href='https://medium.com/@lucascostarodrigues' target='_blank' rel="noreferrer"><AiOutlineMedium /></a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header