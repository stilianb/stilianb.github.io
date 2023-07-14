"use client";
import React, { useState } from "react";
import ListItem from "./ListItem";

function ListMenu(props) {
  return (
    <div className={``}>
      {props.items.map((item) => (
        <ListItem
          name={item.name}
          languages={item.languages}
          desc={item.description}
          url={item.url}
          key={item.key}
        />
      ))}
    </div>
  );
}

export default ListMenu;
