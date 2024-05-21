import React from 'react'
import { Light } from '@/hooks/useTrafficLight'

type DisplayTrafficLightProps = {
  lights: Light[]
}

export const DisplayTrafficLight = ({ lights }: DisplayTrafficLightProps) => {
  return (
    <div className="h-fit w-[150px] p-2 bg-black rounded-lg flex flex-col gap-2 items-center">
      {lights.map(light =>
      <div key={light.action} className='h-[60px] w-full flex items-center justify-start gap-2'>
        <section className="h-[60px] w-[60px] rounded-full"
        style={{backgroundColor: light.active ? light.color : "#9ca3af"}}></section>
        {light.active && <label className="font-bold uppercase" style={{color: light.color}}>{light.action}</label>}
      </div>
      )}
    </div>
  )
}
