import React from 'react'

function Work() {
  return (
    <div id="work" className="grid grid-cols-2 bg-crust p-3 gap-3 mx-3 rounded-md">
      <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-lavender transition-all flex">
        <div className="group-hover:text-mantle">CliqueBait</div>
        <a href="#" className="bg-surface0 rounded-full p-2 w-fit h-fit ml-auto mt-auto hover:bg-surface2 hover:text-text hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
      <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-sapphire transition-all flex">
        <div className="group-hover:text-mantle">Muddy Town</div>
        <a href="#" className="bg-surface0 rounded-full p-2 w-fit h-fit ml-auto mt-auto hover:bg-surface2 hover:text-text hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
      <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-sky transition-all flex">
        <div className="group-hover:text-mantle">Portfolio</div>
        <a href="#" className="bg-surface0 rounded-full p-2 w-fit h-fit ml-auto mt-auto hover:bg-surface2 hover:text-text hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
      <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-blue transition-all flex">
        <div className="group-hover:text-mantle">Small Games & Side Projects</div>
        <a href="#" className="bg-surface0 rounded-full p-2 w-fit h-fit ml-auto mt-auto hover:bg-surface2 hover:text-text hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Work
