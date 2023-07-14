"use client";
import React, { useState } from "react";

function ListItem(props) {
  let [isActive, setActive] = useState("false");
  const OpenItem = () => {
    isActive = "true";
    setActive(useState(isActive));
  };
  const CloseItem = () => {
    isActive = useState("false");
    setActive(useState(isActive));
  };
  const ToggleItem = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`${isActive ? "max-h-[50px]" : ""} border overflow-hidden`}
      onClick={OpenItem}
    >
      <div className="">{props.name}</div>
      <div className="">
        {props.languages.map((language) => (
          <div className="">{language}</div>
        ))}
      </div>
      <div className="">
        <i className={`fa-solid fa-plus`}></i>
      </div>
      <div className="">{props.desc}</div>
      <div className="">{props.url}</div>
    </div>
  );
}

export default ListItem;
