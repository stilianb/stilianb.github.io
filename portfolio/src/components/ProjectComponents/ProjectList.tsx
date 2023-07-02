import React, { useState } from 'react'
import { PROJECTA_NAME } from '../../constants/ProjectInfo'
import ProjectButton from './ProjectButton'

function ProjectList(props) {
  return (
    <div className="">
      <ProjectButton card={props.card} project={PROJECTA_NAME} />
    </div>
  )
}

export default ProjectList
