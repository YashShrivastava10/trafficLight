import React from 'react'
import { Light } from '@/hooks/useTrafficLight'

type DisplayTimerProps = {
  lights: Light[],
  timer: number
}

export const DisplayTimer = ({lights, timer}: DisplayTimerProps) => {
  return (
    <div className={`h-[60px] w-[60px] rounded-full flex-center text-[26px] font-bold bg-black text-${lights.find(light => light.active)!.color}`}>{timer / 1000}</div>
  )
}
