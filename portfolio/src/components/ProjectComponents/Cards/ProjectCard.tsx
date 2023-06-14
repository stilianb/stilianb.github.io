import React from "react";

function ProjectCard(props) {
  return (
    <div
      className={`${
        props.card === props.name ? "md:max-w-full z-10 " : "md:max-w-0 z-5 "
      } ${
        props.color
      } rounded-md h-full w-full absolute bottom-0 md:right-0 truncate z-10 translate-all duration-[400ms]`}
    >
      <div className={`text-black`}>{props.name}</div>
    </div>
  );
}

export default ProjectCard;
