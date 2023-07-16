"use client";
import Link from "next/link";
import React, { useState } from "react";

function ListItem(props, { close }) {
  return (
    <div className="flex flex-col gap-4" key={props.id}>
      <div className="flex h-[40px] sticky top-0">
        <div className="flex-grow h-fit my-auto">{props.name}</div>
        <div className="flex-grow flex gap-2 h-fit my-auto text-xs">
          {props.lang.map((lang) => (
            <div className="" key={lang}>
              {lang}
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col max-h-[325px] overflow-auto">
        <div className="flex-grow md:max-w-[65%] text-sm text-subtext1 p-2 ">
          {props.desc}
        </div>
        <div className=" flex flex-grow">
          <Link
            href={props.url}
            className="w-fit m-auto bg-surface0 p-2 rounded-md text-sm hover:bg-surface1 transition-all"
          >
            Check out the project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
