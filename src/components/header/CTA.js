import React from 'react'
import cv from '../../assets/Curriculum_Vitae_Lucas_Rodrigues.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA