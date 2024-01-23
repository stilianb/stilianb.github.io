import React from 'react'

function Namecard() {
  return (
    <div className="h-full bg-mantle rounded-md max-w-lg relative flex max-h-96 items-end p-4">
      <div className="bg-surface0 p-2 absolute right-4 top-4 rounded-full h-40 w-40 md:h-60 md:w-60">
        <div className="bg-surface1 p-2 rounded-full h-full"></div>
      </div>

      <div className="z-10">
        <h2 className="text-subtext0 pl-1 text-xl">Hi, I'm</h2>
        <h1 className="text-6xl">Stilian Balasopoulov</h1>
        <h3 className="text-subtext0 pl-1 text-lg">A software & web developer from Colorado.</h3>
      </div>
    </div>
  )
}

export default Namecard
