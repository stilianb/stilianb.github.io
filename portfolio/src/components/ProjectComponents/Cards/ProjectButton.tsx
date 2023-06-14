import React from 'react'

function ProjectButton(props, { mode }) {
  return (
    <div>
      <button className="" onClick={() => mode("Project 1")}>project 1</button> 
    </div>
  )
}

export default ProjectButton
