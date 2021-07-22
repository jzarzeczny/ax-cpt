import React, { useEffect, useState } from "react";
import reactiveText from "../public/proactiveText.json";

export default function Reactive() {
  const [phase, setPhase] = useState(0);
  const [instructionsDone, setInstructionsDone] = useState(false);
  function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  useEffect(() => {
    if (phase === reactiveText.length - 1) {
      setInstructionsDone(true);
    }
  }, [phase]);
  return <div className="container">AX-CPT reactive</div>;
}
