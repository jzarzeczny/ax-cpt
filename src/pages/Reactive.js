import React, { useEffect, useState } from "react";
import reactiveText from "../public/reactiveText.json";
import TutorialBox from "../components/TutorialBox";

import lowApproach from "../data/lowApproachReactive.json";
import highApproach from "../data/highApproachReactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [firstTryResult, setFirstTryResult] = useState([]);
  const [secoundTryResult, setSecoundTryResult] = useState([]);
  const [brakeDone, setBrakeDone] = useState(false);
  const [horizontStyling, setHorizontStyling] = useState({});
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
  console.log(firstTryResult);
  console.log(secoundTryResult);

  return (
    <div className="container" style={horizontStyling}>
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !brakeDone && (
        <DisplayTest
          sequence={lowApproach}
          getData={setFirstTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {testDone && !brakeDone && <Clock func={setBrakeDone} />}
      {instructionsDone && !testDone && brakeDone && (
        <DisplayTest
          sequence={highApproach}
          getData={setSecoundTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {instructionsDone && testDone && brakeDone && <Finish from="rective" />}
    </div>
  );
}
