import React, { useState } from "react";

function ProjectButton(props) {
  return (
    <div className="">
      <button
        className={`bg-surface0 hover:bg-surface1`}
      >
        {props.name}
      </button>
    </div>
  );
}

export default ProjectButton;
