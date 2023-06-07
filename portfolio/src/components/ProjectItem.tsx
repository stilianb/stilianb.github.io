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
    <div id={props.name} className={`bg-surface0 rounded-md transition-all`} onClick={ToggleClass}>
      <div className="w-[400px] h-[500px] relative z-0 group">
        <img src={props.img_url} alt="" className="rounded-md absolute" />
        <div className="bg-mantle text-text flex flex-col justify-between p-2 rounded-md absolute transition-all h-72 group-hover:h-80 overflow-hidden w-full bottom-0">
          <div className="">
            <div className="text-2xl">{props.name}</div>
            <div className="text-xs">tags</div>
            <div className="text-sm">{props.desc}</div>
          </div>
          <div className="w-fit mx-auto m-2">
            <a href="#" className="bg-surface0 transition-all hover:bg-surface1 rounded-md p-2">
              Check out the Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
