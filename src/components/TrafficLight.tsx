"use client";

import { DisplayTrafficLight } from "./DisplayTrafficLight";
import { DisplayTimer } from "./DisplayTimer";
import { useTrafficLight } from "@/hooks/useTrafficLight";

export default function TrafficLight() {
  const { sortedOrder, currentTimer } = useTrafficLight()

  return (
    <main className="w-full h-full flex-center flex-col gap-2">
      <DisplayTimer lights={sortedOrder} timer={currentTimer}/>
      <DisplayTrafficLight lights={sortedOrder}/>
    </main>
  );
}
