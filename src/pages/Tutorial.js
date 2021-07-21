import React, { useState, useEffect } from "react";
import TutorialBox from "../components/TutorialBox";
import instructionsData from "../public/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import TestValidation from "../components/TestValidation";
import sequenceData from "../data/tutorial.json";
const instructionData = [...instructionsData];
// const testData = JSON.parse(sequenceData);
export default function Tutorial() {
  const [phase, setPhase] = useState(0);
  const [tutorialDone, setTutorialDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [result, setResult] = useState([]);
  function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  const oneMoreTime = (arg1, arg2) => {
    setTestDone(arg1);
    setResult(arg2);
  };
  useEffect(() => {
    if (phase === instructionData.length - 1) {
      setTutorialDone(true);
    }
    if (result.length !== 0) {
      setTestDone(true);
    }
  }, [phase, result]);
  console.log(tutorialDone, testDone);
  return (
    <div className="container">
      {!tutorialDone && (
        <TutorialBox
          boxVisible={instructionData[phase].boxVisible}
          boxContent={instructionData[phase].boxContent}
          header={instructionData[phase].header}
          para={instructionData[phase].para}
          func={handleKey}
        />
      )}
      {tutorialDone && !testDone && (
        <DisplayTest sequence={sequenceData.sequence} getData={setResult} />
      )}
      {testDone && <TestValidation data={result} oneMoreTime={oneMoreTime} />}
    </div>
  );
}
