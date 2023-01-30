import React from 'react'

const Project = ({id, title, image, video, url, tech, github}) => {
    console.log(image)
  return (
    <div key={id} className="project">
        <h3>{title}</h3>
        <a href={video ? video : url} target="_blank"><img src={image} alt=""/></a>
        <ul className='tech-list list'>
            {tech.map((t, index) => {<li key={index}>{t}</li>})}
        </ul>
        <a href={github} target="_blank">Explore the Code</a>
    </div>
  )
}

export default Project;