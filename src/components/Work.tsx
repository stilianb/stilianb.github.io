import React from 'react'

function Work() {
  return (
    <div id="work" className="grid grid-cols-2 bg-crust p-3 gap-3 mt-3 mx-auto rounded-md max-w-2xl">
      <a href="https://github.com/CliqBait/main">
        <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-lavender transition-all flex">
          <div className="group-hover:text-mantle">CliqueBait</div>
        </div>
      </a>
      <a href="https://github.com/stilianb/MuddyTown">
        <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-sapphire transition-all flex">
          <div className="group-hover:text-mantle">Muddy Town</div>
        </div>
      </a>
      <a href="https://github.com/stilianb/stilianb.github.io">
        <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-sky transition-all flex">
          <div className="group-hover:text-mantle">Portfolio</div>
        </div>
      </a>
      <a href="">
        <div className="group bg-mantle rounded-md p-3 h-60 hover:bg-blue transition-all flex">
          <div className="group-hover:text-mantle">Small Games & Side Projects</div>
        </div>
      </a>
    </div>
  )
}

export default Work
