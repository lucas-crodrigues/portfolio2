/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
// import {AiOutlineTrophy} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href='#'><AiOutlineHome/></a>
        <a href='#about'><AiOutlineAlignLeft/></a>
        <a href='#experience'><AiOutlineFundProjectionScreen/></a>
        <a href='#portfolio'><AiOutlineFolderOpen/></a>
        {/* <a href='#testimonials'><AiOutlineTrophy/></a> */}
        <a href='#contact'><AiOutlineMail/></a>
      </div>
    </footer>
  )
}

export default Footer