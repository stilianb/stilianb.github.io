import Transition from '@/app/components/Transition'
import ListMenu from '@/app/components/listmenu/ListMenu'
import React from 'react'
import sideProjects from './sideProjects.json';

function SideProjects() {
  return (
    <Transition>
      <div className="bg-base bg-opacity-50 w-full p-8 flex flex-col gap-4">
        <div className="mt-8 md:mt-0 w-fit md:w-full mx-auto">
          <h2 className="ml-1 text-subtext0">Check out some of my</h2>
          <h1 className="text-5xl">Side Projects</h1>
        </div>
        <div className="bg-mantle p-2 rounded-md flex-grow">
          <ListMenu items={sideProjects} />
        </div>
      </div>
    </Transition>
  )
}

export default SideProjects
