import React from 'react'
import skills from './skills.js'

const About = () => {

  return (
    <div className='about'>
        <h2>Technical Skills</h2>
        <ul className='skills-list list'>
            {skills.map(s => <li key={s.id}>{s.name}</li>)}
        </ul>
        <h2>Soft Skills</h2>
        <ul className='soft-skills-list list'>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
            <li>Teaching</li>
            <li>Interpersonal Skills</li>
        </ul>
        <p className='thanks'>Thank you for visiting! As I am continuously making improvements, I would appreciate feedback <a href='https://forms.gle/vZQDA7vWEAwC5Upn8' target="_blank">here</a></p>
    </div>
  )
}

export default About