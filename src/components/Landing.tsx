import React from 'react'

function Landing() {
  return (
    <div className="bg-mantle h-60 flex justify-center gap-10">
      <div id="landing-text" className=" pl-12 h-fit my-auto">
        <h1 className="text-4xl">Hi! I'm <span className="text-5xl text-lavender">Stilian</span></h1>
        <p className="">a webdev based out of colorado.</p>
        <div className="flex gap-2 mt-2">
          <a href="#work" className="bg-surface0 p-2 rounded-md hover:bg-surface1 hover:cursor-pointer">Check out my work</a>
          <a href="#contact" className="bg-surface0 p-2 rounded-md hover:bg-surface1 hover:cursor-pointer">Get in touch</a>
        </div>
      </div>
      <div id="landing-img" className="bg-crust rounded-md text-7xl my-3 p-16">img</div>
    </div>
  )
}

export default Landing
