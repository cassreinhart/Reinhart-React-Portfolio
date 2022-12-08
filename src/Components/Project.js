import React from 'react'

const Project = ({id, title, image, video, url, tech, github}) => {
  return (
    <div key={id} className="project">
        <h3>{title}</h3>
        <a href={video ? video : url} target="_blank"><img src={image}/></a>
        <p>{image}</p>
        <ul className='tech-list list'>
            {tech.map(t => <li>{t}</li>)}
        </ul>
        <a href={github} target="_blank">Explore the Code</a>
    </div>
  )
}

export default Project;