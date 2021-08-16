import React, { useEffect, useState } from "react";
import reactiveText from "../public/reactiveText.json";
import TutorialBox from "../components/TutorialBox";
import lowApproach from "../data/reactive/lowApproachReactive.json";
import highApproach from "../data/reactive/highApproachReactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";
import sendResults from "../hooks/sendData";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [refirstTryResult, setReFirstTryResult] = useState([]);
  const [resecoundTryResult, setReSecoundTryResult] = useState([]);
  const [breakDone, setBreakDone] = useState(false);
  const [horizontStyling, setHorizontStyling] = useState({});
  const nickname = localStorage.getItem("nickname");
  useEffect(() => {
    if (refirstTryResult.length !== 0) {
      sendResults(nickname, "reactive/low/", refirstTryResult);

      setTestDone(true);
    }
    if (breakDone === true) {
      setTestDone(false);
    }
    if (resecoundTryResult.length !== 0) {
      sendResults(nickname, "reactive/high/", resecoundTryResult);

      setTestDone(true);
    }
  }, [refirstTryResult, resecoundTryResult, breakDone, nickname]);
  console.log(instructionsDone);
  console.log(testDone);
  console.log(breakDone);

  return (
    <div className="container" style={horizontStyling}>
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !breakDone && (
        <DisplayTest
          sequence={lowApproach}
          getData={setReFirstTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {testDone && !breakDone && <Clock func={setBreakDone} />}
      {instructionsDone && !testDone && breakDone && (
        <DisplayTest
          sequence={highApproach}
          getData={setReSecoundTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {instructionsDone && testDone && breakDone && <Finish from="reactive" />}
    </div>
  );
}
