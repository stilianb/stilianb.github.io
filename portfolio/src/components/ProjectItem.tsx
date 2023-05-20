import React, { useState } from 'react'

function ProjectItem(props) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="bg-subtext0 p-2 rounded-md my-2">
      <div id={props.name} className={isActive ? "transition-all max-h-12 overflow-hidden" : "transition-all max-h-screen"} onClick={ToggleClass}>
        <div className="flex justify-between">
          <div className="">
            <h2>{props.name}</h2>
            <p>{props.shortdesc}</p>
          </div>
          <div className="">
            <ul className="grid grid-cols-2 gap-1 text-sm">
              <li>tag 1</li>
              <li>tag 2</li>
              <li>tag 3</li>
              <li>tag 4</li>
            </ul>
          </div>
        </div>
        <p>{props.extendeddesc}</p>
        <a href="">Check out the Project</a>
      </div>
    </div>
  )
}

export default ProjectItem
