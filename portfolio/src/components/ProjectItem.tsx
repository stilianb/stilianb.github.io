import React, { useState } from 'react'

function ProjectItem(props) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const OpenClass = () => {
    if (isActive) { setActive(!isActive) };
  };


  return (
    <div className="bg-subtext0 p-2 rounded-md my-2">
      <div id={props.name} className={isActive ? "transition-all max-h-14 overflow-hidden" : "transition-all max-h-screen"} onClick={OpenClass}>
        <div className="flex justify-between">
          <div className="flex-grow">
            <h2 className="text-2xl">{props.name}</h2>
            <p>{props.shortdesc}</p>
          </div>
          <div className={isActive ? "transition-all h-fit my-auto " : "transition-all h-fit my-auto -translate-x-20"}>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              <li>tag 1</li>
              <li>tag 2</li>
              <li>tag 3</li>
              <li>tag 4</li>
            </ul>
          </div>
          <div className={isActive ? "transition-all opacity-0 h-fit my-auto" : "transition-all opacity-50 h-fit my-auto"} onClick={ToggleClass}>x</div>
        </div>
        <div className={isActive ? "transition-opacity opacity-0" : "transition-opacity opacity-100"}>
          <div className="flex flex-wrap-reverse justify-evenly my-2 gap-2">
            <p className="md:w-1/2">{props.extendeddesc}</p>
            <div className="bg-lavender flex-grow rounded-md p-2">
              img
            </div>
          </div>
          <div className="flex justify-between">
            <ul className="">
              <li>contributor 1</li>
              <li>contributor 2</li>
              <li>contributor 3</li>
            </ul>
            <a href="" className="rounded-md p-1 bg-surface0 text-text h-fit my-auto">Check out the Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
