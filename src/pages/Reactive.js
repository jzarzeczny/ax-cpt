import React, { useEffect, useState } from "react";
import reactiveText from "../public/reactiveText.json";
import TutorialBox from "../components/TutorialBox";

import lowApproach from "../data/lowApproachReactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [firstTryResult, setFirstTryResult] = useState([]);
  const [secoundTryResult, setSecoundTryResult] = useState([]);
  const [brakeDone, setBrakeDone] = useState(false);
  useEffect(() => {
    if (firstTryResult.length !== 0) {
      setTestDone(true);
    }
    if (brakeDone === true) {
      setTestDone(false);
    }
    if (secoundTryResult.length !== 0) {
      setTestDone(true);
    }
  }, [firstTryResult, secoundTryResult, brakeDone]);
  return (
    <div className="container">
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !brakeDone && (
        <DisplayTest sequence={lowApproach} getData={setFirstTryResult} />
      )}
      {testDone && <Clock func={setBrakeDone} />}
      {instructionsDone && !testDone && brakeDone && (
        <DisplayTest sequence={lowApproach} getData={setSecoundTryResult} />
      )}
      {instructionsDone && testDone && brakeDone && <h1>Zakończenie dnia!</h1>}
    </div>
  );
}
