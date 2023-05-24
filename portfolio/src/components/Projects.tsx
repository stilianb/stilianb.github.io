import React from 'react'
import ProjectItem from './ProjectItem'
import photo1 from '../assets/img1.jpg'

function Projects() {
  return (
    <div id="projects" className="m-2 pt-16 ">
      <div className="bg-neutral-500 w-full rounded-md flex flex-wrap gap-2 p-2 justify-evenly">
        <ProjectItem
          name="CliqueBait"
          img_url={photo1}
          desc=
          "A full stack social media management app for Android. Created for my capstone at MSU Denver."
          contribution="Front-end design and implementation"
        />
        <ProjectItem
          name="Project 2"
          img_url={photo1}
          desc="project description"
          contribution="project contribution"
        />
        <ProjectItem
          name="Project 3"
          img_url={photo1}
          desc="project description"
          contribution="project contribution"
        />
        <ProjectItem
          name="Project 4"
          img_url={photo1}
          desc="project description"
          contribution="project contribution"
        />
      </div>
    </div>
  )
}

export default Projects
