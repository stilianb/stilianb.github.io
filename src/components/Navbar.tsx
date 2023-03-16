import React from 'react'

function Navbar() {
  return (
    <div className="sticky top-0 w-screen flex justify-end pr-5">
      <a href="#" className="nav-item p-2 hover:text-lavender">Home</a>
      <a href="#work" className="nav-item p-2 hover:text-lavender">Work</a>
      <a href="#contact" className="nav-item p-2 hover:text-lavender">Contact</a>
    </div>
  )
}

export default Navbar
