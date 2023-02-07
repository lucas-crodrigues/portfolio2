import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className='container experience-container'>
        <ul className='card frontend-card'>
          <h3>Front-End Stack</h3>
            <li>JavaScript</li>
            <li>React/Redux</li>
            <li>Bootstrap</li>
            <li>HTML5</li>
            <li>CSS3</li>
        </ul>
        <ul className='card backend-card'>
          <h3>Back-End Stack</h3>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
        </ul>
        <ul className='card tech-card'>
          <h3>Tech Stack</h3>
            <li>Git</li>
            <li>OOP</li>
            <li>TDD</li>
            <li>Responsive Development</li>
        </ul>
        <ul className='card soft-card'>
          <h3>Soft Skills</h3>
            <li>Remote Work</li>
            <li>Pair Programming</li>
            <li>Cross-cultural Communication</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Problem Resolution</li>
            <li>Mentoring</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience