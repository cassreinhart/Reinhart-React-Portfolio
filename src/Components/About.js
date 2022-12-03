import React from 'react'

const About = () => {
    const skills = [
        {
            id: 5,
            name: 'HTML',
            icon: '',
        },
        {
            id: 6,
            name: 'CSS',
            icon: '',
        },
        {
            id: 1,
            name: 'JavaScript',
            icon: '',
        },
        {
            id: 2,
            name: 'Python',
            icon: '',
        },
        {
            id: 3,
            name: 'Postgres',
            icon: '',
        },
        {
            id: 4,
            name: 'SQL',
            icon: '',
        },
        {
            id: 5,
            name: 'SQLAlchemy',
            icon: '',
        },
    ]
  return (
    <div className='about'>
        <h2>Skills</h2>
        <ul className='skills-list'>
            {skills.map(s => <li key={s.id}>{s.name}</li>)}
        </ul>
    </div>
  )
}

export default About