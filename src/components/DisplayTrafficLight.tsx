import React from 'react'
import { Light } from '@/hooks/useTrafficLight'

type DisplayTrafficLightProps = {
  lights: Light[]
}

export const DisplayTrafficLight = ({lights} : DisplayTrafficLightProps) => {
  return (
    <div className="h-[200px] w-[80px] bg-black rounded-lg flex flex-col justify-evenly items-center">
        {lights.map(light => 
          <section key={light.action} className={`h-[60px] w-[60px] rounded-full ${light.active ? `bg-${light.color}` : 'bg-gray-400'}`}></section>
          )}
      </div>
  )
}
