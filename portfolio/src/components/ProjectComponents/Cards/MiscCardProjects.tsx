import React, { useState } from "react";

function MiscCardProjects(props) {
  let [isActive, setActive] = useState("false");

  const ToggleProject = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`${
        isActive
          ? "min-h-[65px] max-h-[65px] md:max-h-[55px] bg-base"
          : "min-h-[400px] max-h-[400px] bg-base"
      } translate-all duration-200 flex-grow rounded-md flex flex-col overflow-hidden relative hover:bg-mantle`}
    >
      <div
        className="flex h-[65px] absolute w-full px-3"
        onClick={isActive ? ToggleProject : undefined}
      >
        <div className="flex-grow my-auto">{props.name}</div>
        <div className="flex-grow my-auto">{props.languages}</div>
        <div
          className={`${
            isActive ? "pointer-events-none md:pointer-events-auto" : ""
          } px-2 py-1 my-auto rounded-md hover:bg-surface1 hover:cursor-pointer`}
          onClick={ToggleProject}
        >
          <i
            className={`${
              isActive ? "" : "rotate-45"
            } translate-all duration-200 fa-solid fa-plus `}
          ></i>
        </div>
      </div>
      <div className="flex-grow mt-[65px] flex flex-col justify-evenly max-w-[85%] mx-auto">
        <div className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex justify-end">
          <a href="#" className="bg-surface0 rounded-md p-2 ">Check out the repo</a>
        </div>
      </div>
    </div>
  );
}

export default MiscCardProjects;
