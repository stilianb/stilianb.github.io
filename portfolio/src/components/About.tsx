import React from 'react'

function About() {
  return (
    <div id="about" className="h-screen pt-14">
      <div className="bg-crust text-text m-2 p-2 rounded-md">
        <div className="flex flex-col">
          <h1 className="text-3xl">a little about me...</h1>
          <div className="flex flex-wrap m-2 gap-2">
            <p className="text-md max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="bg-mantle flex-grow rounded-md p-2">
              <h2 className="text-xl w-fit mx-auto">My Favorite Tools</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
