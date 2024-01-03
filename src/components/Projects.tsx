import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div
      className="bg-mantle p-2 flex flex-col gap-2 rounded-md">
      <div className="bg-surface0 rounded-sm px-2 py-1">search</div>
      <div className="flex flex-col gap-1 md:max-h-[200px] lg:max-h-[530px] overflow-auto">
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
