import React from 'react'
import { FaFish, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNeovim, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div id="about" className="bg-crust m-3 p-3 rounded-md">
      <div className="bg-mantle rounded-md mb-3 p-3 flex gap-3 items-center">
        <div className="w-1/2">
          <h1 className="text-lavender text-2xl">A little about me.</h1>
        </div>
        <div className="w-1/2">socials</div>
      </div>
      <div className="flex gap-3">
        <div className="bg-mantle rounded-md p-3 w-1/2 flex flex-col gap-3">
          <h2 className="text-sapphire text-2xl">Experience</h2>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-green rounded-md w-80">
                <p className="text-mantle px-3">HTML/XML</p>
              </div>
              <p className="text-text px-3">95%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-rosewater rounded-md w-60">
                <p className="text-mantle px-3">CSS</p>
              </div>
              <p className="text-text px-3">90%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-maroon rounded-md w-56">
                <p className="text-mantle px-3">Java/JS</p>
              </div>
              <p className="text-text px-3">85%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-maroon rounded-md w-56">
                <p className="text-mantle px-3">TypeScript</p>
              </div>
              <p className="text-text px-3">85%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-maroon rounded-md w-52">
                <p className="text-mantle px-3">React</p>
              </div>
              <p className="text-text px-3">80%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-maroon rounded-md w-52">
                <p className="text-mantle px-3">Kotlin</p>
              </div>
              <p className="text-text px-3">80%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-mauve rounded-md w-60">
                <p className="text-mantle px-3">Python</p>
              </div>
              <p className="text-text px-3">90%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-mauve rounded-md w-52">
                <p className="text-mantle px-3">Lua</p>
              </div>
              <p className="text-text px-3">80%</p>
            </div>
            <div className="bg-surface0 flex justify-between rounded-md">
              <div className="bg-mauve rounded-md w-44">
                <p className="text-mantle px-3">C++</p>
              </div>
              <p className="text-text px-3">60%</p>
            </div>
        </div>
        <div className="bg-mantle rounded-md p-3 w-1/2 flex flex-col gap-3">
          <h2 className="text-sapphire text-2xl">My Tools</h2>
          <a href="#" className="bg-surface0 rounded-md flex justify-between items-center p-3 hover:bg-surface2">
            <h3 className="text-text">Neovim</h3>
            <SiNeovim className="text-3xl"/>
          </a>
          <a href="#" className="bg-surface0 rounded-md flex justify-between items-center p-3 hover:bg-surface2">
            <h3 className="text-text">Fish</h3>
            <FaFish className="text-3xl"/>
          </a>
          <a href="#" className="bg-surface0 rounded-md flex justify-between items-center p-3 hover:bg-surface2">
            <h3 className="text-text">NextJS</h3>
            <TbBrandNextjs className="text-3xl"/>
          </a>
          <a href="#" className="bg-surface0 rounded-md flex justify-between items-center p-3 hover:bg-surface2">
            <h3 className="text-text">Tailwindcss</h3>
            <SiTailwindcss className="text-3xl"/>
          </a>
          <a href="#" className="bg-surface0 rounded-md flex justify-between items-center p-3 hover:bg-surface2">
            <h3 className="text-text">Git</h3>
            <FaGithub className="text-3xl"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
