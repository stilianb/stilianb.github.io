import React from 'react'

function Hero() {
  return (
    <div id="hero" className="page flex flex-wrap gap-2 p-2">
      <div id="hero-text-container" className="bg-crust text-text rounded-md flex-grow flex flex-col justify-evenly">
        <div className="mx-auto ">
          <div className="flex flex-wrap gap-2 items-center w-fit">
            <div className="text-3xl">Hi, I'm</div>
            <div className="text-6xl">Stilian</div>
          </div>
          <div className="w-3/4 mx-auto flex justify-center">A webdev based in Colorado.</div>
        </div>
        <div id="socials-container" className="w-3/4 mx-auto p-3 ">
          <ul id="socials-list" className="flex gap-2 justify-center">
            <li className=""><a href="#">GitHub</a></li>
            <li className=""><a href="#">LinkedIn</a></li>
            <li className=""><a href="#">CodePen</a></li>
          </ul>
        </div>
      </div>
      <div id="image-container" className="bg-crust text-text rounded-md flex-grow flex justify-center">
        <div className="h-fit m-auto">image-placeholder-text</div>
      </div>
    </div>
  )
}

export default Hero
