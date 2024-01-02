import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div
      className="bg-gray-400 p-2 flex flex-col gap-2">
      <div className="bg-gray-500">search</div>
      <div className="bg-gray-500 flex flex-col gap-1 max-h-[530px] overflow-auto">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects
