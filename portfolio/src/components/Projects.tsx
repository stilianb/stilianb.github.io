import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id="projects" className="pt-14">
      <div className="bg-gray-400 m-2 p-2 rounded-md h-full">
        <div className="text-3xl">My Work...</div>
        <ProjectItem
          name="project1"
          shortdesc="short description"
          extendeddesc="extended description :) lorem ipsum is hard to google"
          url=""
        />
      </div>
    </div>
  )
}

export default Projects
