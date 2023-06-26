import React, { useState } from "react";

function AltCard(props) {
  return (
    <div
      className={`${
        props.card === props.name ? "max-w-full" : "max-w-0 "
      } bg-surface0 rounded-md absolute right-0 overflow-auto h-full w-full translate-all duration-200 `}
    >
      {props.name}
    </div>
  );
}

export default AltCard;
