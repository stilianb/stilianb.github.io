import React, { useState } from "react";

export default function Navbar({ mode }) {
  return (
    <nav className="sticky top-0 pt-2 ml-2 mr-2 mb-2 bg-base rounded-b-md z-10 text-text">
      <div className="bg-surface2 rounded-md flex justify-between pl-3">
        <div id="nav-icon-name" className="flex align-center gap-2">
          <div className="h-fit my-auto"><a href="#">sb</a></div>
          <div className="text-2xl h-fit my-auto hidden md:flex"><a href="#">Stilian Balasopoulov</a></div>
        </div>
        <div className="flex h-fit my-auto">
          <a href="#projects" className="p-3">Projects</a>
          <a href="#about" className="p-3">About</a>
          <div className="h-fit p-2 my-auto mr-2 rounded-md hover:bg-surface0 hover:cursor-pointer" onClick={() => mode()}><i className="fa-solid fa-moon"></i></div>
        </div>
      </div>
    </nav>
  )
}
