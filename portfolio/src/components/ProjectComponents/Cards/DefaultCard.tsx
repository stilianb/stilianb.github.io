import React from "react";

function ProjectCard(props) {
  return (
    <div
      className={`${props.card === props.name ? "max-w-full z-10 " : "max-w-0 z-5 "} ${props.color
        } rounded-md min-h-full w-full absolute right-0 truncate z-10 translate-all duration-[400ms]`}
    >
      <div className={`text-black`}>{props.name}</div>
    </div>
  );
}

export default ProjectCard;
