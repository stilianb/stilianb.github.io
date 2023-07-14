import Transition from '@/app/components/Transition'
import React from 'react'

function Portfolios() {
  return (
    <Transition>
      <div className="bg-base bg-opacity-50 w-full p-8">
        <h2 className="ml-1 text-subtext0">Check out some of my</h2>
        <h1 className="text-5xl">Portfolios</h1>
      </div>
    </Transition>
  )
}

export default Portfolios
