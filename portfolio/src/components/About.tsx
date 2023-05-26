import React from 'react'

function About() {
  return (
    <div id="about" className="h-screen pt-14">
      <div className="bg-crust text-text m-2 p-2 rounded-md">
        <div className="flex flex-col">
          <h1 className="text-3xl">a little about me...</h1>
          <div className="flex flex-wrap m-2 gap-2">
            <p className="text-lg max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex flex-row lg:flex-col gap-3 text-xl justify-center mx-auto">
              <a href="" className="bg-surface0 rounded-md p-2 flex justify-center">Resume</a>
              <a href="" className="bg-surface0 rounded-md p-2 flex justify-center">Email</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-mantle flex-grow rounded-md p-2">
            <h2 className="text-2xl">Experience</h2>
            <ul id="languages">
              <li>language</li>
            </ul>
          </div>
          <div className="bg-mantle flex-grow rounded-md p-2">
            <h2 className="text-2xl">My Favorite Tools</h2>
            <ul id="tools">
              <li><a href="">Neovim</a></li>
              <li><a href="">Tmux</a></li>
              <li><a href="">Fish Shell</a></li>
              <li><a href="">Git / Github</a></li>
              <li><a href="">Tailwind</a></li>
              <li><a href="">Vite</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
