import { useState, useEffect } from 'react'

export type Light = {
  color: "red" | "yellow" | "green",
  action: "stop" | "wait" | "go",
  timer: number,
  active: boolean
}

export const useTrafficLight = () => {

  const [lights, setLights] = useState<Light[]>([
    {color: "red", action: "stop", timer: 10000, active: true},
    {color: "green", action: "go", timer: 5000, active: false},
    {color: "yellow", action: "wait", timer: 1000, active: false},
  ])

  const [currentTimer, setCurrentTimer] = useState<number>(lights[0].timer)

  const order = ['stop', 'wait', 'go'];

  const sortedOrder = lights.slice().sort((a, b) => order.indexOf(a.action) - order.indexOf(b.action));

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
          return updatedLights[nextLightIndex].timer
        }
      });
    }, 1000);

    return () => clearTimeout(timerInterval);
  }, [lights]);

  return { sortedOrder, currentTimer }
}