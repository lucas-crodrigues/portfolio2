import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {AiOutlineTrophy} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <a href='#'><AiOutlineHome/> Home</a>
      <a href='#about'><AiOutlineAlignLeft/> About</a>
      <a href='#experience'><AiOutlineFundProjectionScreen/> Experience</a>
      <a href='#portfolio'><AiOutlineFolderOpen/> Portfolio</a>
      <a href='#testimonials'><AiOutlineTrophy/> Testimonials</a>
      <a href='#contact'><AiOutlineMail/> Contact</a>
    </nav>
  )
}

export default Nav