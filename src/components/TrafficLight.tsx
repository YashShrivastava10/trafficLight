"use client";

import { DisplayTrafficLight } from "./DisplayTrafficLight";
import { DisplayTimer } from "./DisplayTimer";
import { useTrafficLight } from "@/hooks/useTrafficLight";

export default function TrafficLight() {
  const { lights, currentTimer } = useTrafficLight()

  return (
    <main className="w-full h-full flex-center flex-col gap-2">
      <DisplayTimer lights={lights} timer={currentTimer}/>
      <DisplayTrafficLight lights={lights}/>
    </main>
  );
}
