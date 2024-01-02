import React from 'react'

function ProjectItem() {
  return (
    <div className="bg-gray-700 flex justify-between p-2">
      <div className="">name</div>
      <div className="flex gap-1">
        <div className="bg-green-500">tag1</div>
        <div className="bg-red-500">tag2</div>
      </div>
      <div className="">links</div>
    </div>
  )
}

export default ProjectItem
