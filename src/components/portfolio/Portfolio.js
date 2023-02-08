import React from 'react'
import './portfolio.css'
import P1 from '../../assets/bike_rentals.png'
import P2 from '../../assets/Free_GamesDB.png'
import P3 from '../../assets/RailsCapstone.png'
import P4 from '../../assets/Magic_cards_collection.png'
import P5 from '../../assets/Bookstore.png'
import P6 from '../../assets/To-Do_List.png'
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My recent work</h2>
      <div className='container portfolio-container'>
        <div className='projects'>
          <article className='project'>
            <div className='project-image'>
              <img src={P1} />
            </div>
            <h4>Bike Rentals</h4>
            <div className='project-actions'>
              <a href='https://github.com/AbrahaKahsay/final-capstone-frontend' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://ducati-rentals.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
          <article className='project'>
            <div className='project-image'>
              <img src={P2} />
            </div>
            <h4>Free Games Database</h4>
            <div className='project-actions'>
              <a href='https://github.com/lucas-crodrigues/free-games-db' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://free-games-db.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
          <article className='project'>
            <div className='project-image'>
              <img src={P3} />
            </div>
            <h4>Expenser App</h4>
            <div className='project-actions'>
              <a href='https://github.com/lucas-crodrigues/rails-capstone' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://expenser.onrender.com/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
          <article className='project'>
            <div className='project-image'>
              <img src={P4} />
            </div>
            <h4>Magic Cards Collection</h4>
            <div className='project-actions'>
              <a href='https://github.com/lucas-crodrigues/js-capstone' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://lucas-crodrigues.github.io/js-capstone/dist/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
          <article className='project'>
            <div className='project-image'>
              <img src={P5} />
            </div>
            <h4>Bookstore</h4>
            <div className='project-actions'>
              <a href='https://github.com/lucas-crodrigues/bookstore' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://bookstore-lucas.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
          <article className='project'>
            <div className='project-image'>
              <img src={P6} />
            </div>
            <h4>To-Do List</h4>
            <div className='project-actions'>
              <a href='https://github.com/lucas-crodrigues/to-do-list' className='btn' target='_blank' rel="noreferrer"><AiOutlineGithub /> Source Code</a>
              <a href='https://lucas-crodrigues.github.io/to-do-list/dist/' className='btn btn-primary' target='_blank' rel="noreferrer"><AiOutlineGlobal /> Live Version</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio