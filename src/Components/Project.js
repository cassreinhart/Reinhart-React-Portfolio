import React from 'react'

const Project = (props) => {
    const projects = [
        {
            id: 1,
            title: 'Hack or Snooze',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
            url: 'https://cassreinhart.github.io/hack-or-snooze/#',
            github: 'https://github.com/cassreinhart/hack-or-snooze'
        },
        {
            id: 2,
            title: 'imgman',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
            video: 'https://www.google.com',
            url: 'https://imgman.herokuapp.com/',
            github: 'https://github.com/cassreinhart/imgman'
        },
        {
            id: 3,
            title: 'Project Management App',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
            url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2220s',
            github: 'https://github.com/cassreinhart/Capstone-1'
        },
        {
            id: 4,
            title: 'Boggle',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
            video: 'https://www.google.com',
            url: 'link to github',
            github: 'https://github.com/cassreinhart/flask-boggle'
        },
    ]
  return (
    <section>
        {projects.map(project => {
            return (
            <div key={project.id}>
                <h3>{project.title}</h3>
                <a href={project.video ? project.video : project.url}><img src={project.image}/></a>
                <a href={project.github}>Link to Code</a>
            </div>
            )})
        }
    </section>
  )
}

export default Project