import React from 'react'

function Hero() {
  return (
    <div id="hero" className="page flex flex-wrap gap-2 px-2 text-text">
      <div id="hero-text-container" className="bg-crust rounded-md flex-grow flex flex-col justify-evenly">
        <div className="mx-auto ">
          <div className="flex flex-wrap gap-2 items-center w-fit">
            <div className="text-3xl">Hi, I'm</div>
            <div className="text-6xl">Stilian</div>
          </div>
          <div className="w-3/4 mx-auto flex justify-center">A webdev based in Colorado.</div>
        </div>
        <div id="socials-container" className="w-3/4 mx-auto p-3 ">
          <ul id="socials-list" className="flex gap-2 justify-center text-2xl">
            <li className=""><a href="#"><i className="fa-brands fa-github "></i></a></li>
            <li className=""><a href="#"><i className="fa-brands fa-linkedin "></i></a></li>
            <li className=""><a href="#"><i className="fa-solid fa-envelope "></i></a></li>
          </ul>
        </div>
      </div>
      <div id="image-container" className="bg-crust rounded-md flex-grow flex justify-center">
        <div className="h-fit m-auto">image-placeholder-text</div>
      </div>
    </div>
  )
}

export default Hero
