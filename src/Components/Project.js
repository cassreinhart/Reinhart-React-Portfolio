import React from 'react'
import hackOrSnooze from '../static/images/hack-or-snooze.png'
import imgman from '../static/images/imgman.png'
import boggle from '../static/images/boggle.png'

const Project = (props) => {
    const projects = [
        {
            id: 1,
            title: 'Hack or Snooze',
            image: hackOrSnooze,
            url: 'https://cassreinhart.github.io/hack-or-snooze/#',
            tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
            github: 'https://github.com/cassreinhart/hack-or-snooze'
        },
        {
            id: 2,
            title: 'imgman',
            image: imgman,
            video: 'https://youtu.be/krUEr4EccdY',
            url: 'https://imgman.herokuapp.com/',
            tech: ['JavaScript', 'Bootstrap', 'CSS', 'HTML', 'Django Templates'],
            github: 'https://github.com/cassreinhart/imgman'
        },
        {
            id: 3,
            title: 'Project Management App',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
            url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2220s',
            tech: ['Python/Flask', 'SQLAlchemy', 'PostgreSQL', 'RESTful APIs', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/cassreinhart/Capstone-1'
        },
        {
            id: 4,
            title: 'Boggle',
            image: boggle,
            video: 'https://www.google.com',
            url: 'link to github',
            tech: ['Python/Flask', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/cassreinhart/flask-boggle'
        },
    ]
  return (
    <section className='content'>
        {projects.map(project => {
            return (
            <div key={project.id} className="project">
                <h3>{project.title}</h3>
                <a href={project.video ? project.video : project.url}><img src={process.env.PUBLIC_URL + project.image}/></a>
                <p>{project.image}</p>
                <ul className='tech-list list'>
                    {project.tech.map(t => <li>{t}</li>)}
                </ul>
                <a href={project.github}>Explore the Code</a>
            </div>
            )})
        }
    </section>
  )
}

export default Project