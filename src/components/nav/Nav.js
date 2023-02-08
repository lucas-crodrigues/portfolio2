import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
// import {AiOutlineTrophy} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <a href='#'><AiOutlineHome/><p className='hide'>Home</p></a>
      <a href='#about'><AiOutlineAlignLeft/><p className='hide'>About</p></a>
      <a href='#experience'><AiOutlineFundProjectionScreen/><p className='hide'>Experience</p></a>
      <a href='#portfolio'><AiOutlineFolderOpen/><p className='hide'>Portfolio</p></a>
      {/* <a href='#testimonials'><AiOutlineTrophy/> Testimonials</a> */}
      <a href='#contact'><AiOutlineMail/><p className='hide'>Contact</p></a>
    </nav>
  )
}

export default Nav