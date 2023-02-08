import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
      <article className='contact-option'>
          <h2><AiOutlineMail /></h2>
          <h4>Email</h4>
          <h5>cr.lucasrodrigues@gmail.com</h5>
          <a href='mailto:cr.lucasrodrigues@gmail.com'>Send an Email</a>
        </article>
        <article className='contact-option'>
          <h2><AiOutlineWhatsApp /></h2>
          <h4>WhatsApp</h4>
          <h5>Personal Phone Number</h5>
          <a href='https://wa.me/+5547999276195' target='_blank' rel="noreferrer">Message Me</a>
        </article>
      </div>
    </section>
  )
}

export default Contact