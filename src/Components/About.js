import React from 'react'

const About = () => {
    const skills = [
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
    ]
  return (
    <div>
        <h2>Skills</h2>
        <ul>
            {skills.map(s => <li key={s.id}>{s.name}</li>)}
        </ul>
    </div>
  )
}

export default About