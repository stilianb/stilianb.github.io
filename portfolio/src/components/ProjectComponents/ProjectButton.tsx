import React from "react";

function ProjectButton(props) {
  return (
    <div
      className={`${
        props.card === props.project ? "bg-surface2" : "bg-surface0"
      } p-2 rounded-sm m-2 text-2xl hover:bg-surface1 hover:cursor-pointer transition-all text-center`}
    >
      {props.project}
    </div>
  );
}

export default ProjectButton;
