import { useState, useEffect } from 'react'

export type Light = {
  color: "red" | "yellow" | "green",
  action: "stop" | "wait" | "go",
  timer: number,
  active: boolean
}

export const useTrafficLight = () => {
  const [lights, setLights] = useState<Light[]>([
    {color: "red", action: "stop", timer: 4000, active: true},
    {color: "yellow", action: "wait", timer: 1000, active: false},
    {color: "green", action: "go", timer: 3000, active: false},
  ])
  const [currentTimer, setCurrentTimer] = useState<number>(lights[0].timer)

  useEffect(() => {
    const activeLightIndex = lights.findIndex(light => light.active);
    const nextLightIndex = (activeLightIndex + 1) % lights.length;

    const timerInterval = setInterval(() => {
      setCurrentTimer(prevTimer => {
        if (prevTimer > 1000) {
          return prevTimer - 1000;
        } else {
          clearInterval(timerInterval);
          const updatedLights = lights.map((light, index) => ({
            ...light,
            active: index === nextLightIndex
          }));
          setLights(updatedLights);
          setCurrentTimer(updatedLights[nextLightIndex].timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearTimeout(timerInterval);
  }, [lights]);

  return { lights, currentTimer }
}
