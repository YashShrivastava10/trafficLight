"use client";

import { useEffect, useState } from "react";

type Light = {
  color: "red" | "yellow" | "green",
  action: "stop" | "wait" | "go",
  timer: number,
  active: boolean
}
export default function TrafficLight() {
  const [light, setLight] = useState<Light[]>([
    {color: "red", action: "stop", timer: 4000, active: true},
    {color: "yellow", action: "wait", timer: 1000, active: false},
    {color: "green", action: "go", timer: 3000, active: false},
  ])
  const [currentTimer, setCurrentTimer] = useState<number>(light[0].timer)

  useEffect(() => {
    const activeLightIndex = light.findIndex(light => light.active);
    const nextLightIndex = (activeLightIndex + 1) % light.length;

    const timerInterval = setInterval(() => {
      setCurrentTimer(prevTimer => {
        if (prevTimer > 1000) {
          return prevTimer - 1000;
        } else {
          clearInterval(timerInterval);
          const updatedLights = light.map((light, index) => ({
            ...light,
            active: index === nextLightIndex
          }));
          setLight(updatedLights);
          setCurrentTimer(updatedLights[nextLightIndex].timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearTimeout(timerInterval);
  }, [light]);

  return (
    <main className="w-full h-full flex-center flex-col gap-2">
      <div className={`h-[60px] w-[60px] rounded-full flex-center text-[26px] font-bold bg-black text-${light.find(light => light.active)!.color}`}>{currentTimer / 1000}</div>
      <div className="h-[200px] w-[80px] bg-black rounded-lg flex flex-col justify-evenly items-center">
        {light.map(light => 
          <section key={light.action} className={`h-[60px] w-[60px] rounded-full ${light.active ? `bg-${light.color}` : 'bg-gray-400'}`}></section>
          )}
      </div>
    </main>
  );
}
