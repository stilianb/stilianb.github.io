import React from 'react'
import SocialItem from './SocialItem'

function Socials() {
  return (
    <div className="bg-mantle p-2 rounded-md h-full">
      <div className="md:grid grid-cols-2 h-full flex flex-col gap-2">
        <SocialItem />
        <SocialItem />
        <SocialItem />
        <SocialItem />
      </div>
    </div>
  )
}

export default Socials
