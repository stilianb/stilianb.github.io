import React from 'react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 pt-2 ml-2 mr-2 mb-2 bg-base rounded-b-md z-10">
      <div className="bg-mantle text-text rounded-md flex justify-between pl-3">
        <div id="nav-icon-name" className="flex align-center gap-2">
          <div className="h-fit my-auto"><a href="#">sb</a></div>
          <div className="text-2xl h-fit my-auto hidden md:flex"><a href="#">Stilian Balasopoulov</a></div>
        </div>
        <div className="flex h-fit my-auto">
          <a href="#projects" className="p-3">Projects</a>
          <a href="#about" className="p-3">About</a>
        </div>
      </div>
    </nav>
  )
}
