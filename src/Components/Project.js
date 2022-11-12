import React from 'react'

const Project = (props) => {
    const projects = [
        {
            id: 1,
            title: 'Hack or Snooze',
            image: 'Implement Dark Mode',
            url: 'https://cassreinhart.github.io/hack-or-snooze/#',
            github: 'https://github.com/cassreinhart/hack-or-snooze'
        },
        {
            id: 2,
            title: 'imgman',
            image: '',
            video: 'Post this on youtube...',
            url: 'https://imgman.herokuapp.com/',
            github: 'https://github.com/cassreinhart/imgman'
        },
        {
            id: 3,
            title: 'Project Management App',
            image: 'tbd',
            url: 'tbd',
            github: 'https://github.com/cassreinhart/Capstone-1'
        },
        {
            id: 4,
            title: 'Boggle',
            image: 'tbd',
            video: 'Post me to youtube...',
            url: 'link to github',
            github: 'https://github.com/cassreinhart/flask-boggle'
        },
    ]
  return (
    <section>
        {projects.map( project => {
            <div>
                <h3>{project.title}</h3>
                <image src={project.image}>
                    <a href={project.url ? project.url : project.video}></a>
                </image>
                <a href={project.github}>Link to Code</a>
            </div>
            }
        )}
    </section>
  )
}

export default Project