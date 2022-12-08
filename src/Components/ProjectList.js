import React from 'react'
import {projects} from "./projectData.js"
import Project from './Project.js'


const ProjectList = () => {
    
  return (
    <section className='content'>
        <h2>My Projects</h2>
        <div className='projects'>
        {projects.map(project => {(
            <Project id={project.id} title={project.title} video={project.video} image={project.image} 
                    url={project.url} github={project.github} tech={project.tech}/>
            )})}
        </div>
    </section>
  )
}

export default ProjectList;