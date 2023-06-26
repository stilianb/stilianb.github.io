import React, { useState } from 'react'

function Sidebar(props, { change }) {
  return (
    <div className="bg-mantle rounded-md p-2">
      <div className="">projects</div>
      <button className="bg-surface0" onClick={() => change()}>:O</button>
    </div>
  )
}

export default Sidebar
