import React from 'react'

function ProjectItem() {
  return (
    <div className="bg-surface0 rounded-md flex justify-between p-2">
      <div className="">name</div>
      <div className="flex gap-1 text-xs">
        <div className="bg-green rounded-md p-1 text-crust">tag1</div>
        <div className="bg-red rounded-md p-1 text-crust">tag2</div>
        <div className="bg-blue rounded-md p-1 text-crust">tag2</div>
      </div>
      <div className="flex rounded-sm gap-1">
        <div className="bg-surface1 px-1 rounded-sm">1</div>
        <div className="bg-surface1 px-1 rounded-sm">2</div>
      </div>
    </div>
  )
}

export default ProjectItem
