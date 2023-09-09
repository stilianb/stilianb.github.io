"use client";
import React from "react";

function Button(props: any) {
  return (
    <div className="border">
      <a
        href={props.url}
        className="p-2 bg-crust rounded-md hover:bg-surface1 transition-all w-full "
      >
        {props.text}
      </a>
    </div>
  );
}

export default Button;
