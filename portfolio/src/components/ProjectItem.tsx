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
    <div id={props.name} className={`rounded-md transition-all w-fit`} onClick={ToggleClass}>
      <div className="bg-neutral-600 w-[400px] h-[500px] rounded-md flex flex-col justify-between">
        <div className="h-full p-2 flex flex-col">
          <div className="">
            <div className="text-xl">{props.name}</div>
            <div className="">tags</div>
          </div>
          <div className="flex-grow">{props.desc}</div>
          <div className="">My Role: {props.contribution}</div>
        </div>
        <a href="#" className="bg-neutral-700 hover:bg-neutral-800 rounded-md text-center p-2 m-2">Check out the Project</a>
      </div>
    </div>
  )
}

export default ProjectItem
