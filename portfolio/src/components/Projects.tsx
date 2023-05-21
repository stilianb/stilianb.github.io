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
          extendeddesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
        <ProjectItem
          name="project2"
          shortdesc="short description"
          extendeddesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
        <ProjectItem
          name="project3"
          shortdesc="short description"
          extendeddesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
      </div>
    </div>
  )
}

export default Projects
