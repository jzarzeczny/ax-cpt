import React, { useEffect, useState } from "react";
import reactiveText from "../assets/proactiveText.json";
import TutorialInstrunction from "../components/TutorialInstrunction";
import lowApproach from "../data/proactive/lowApproachProactive.json";
import highApproach from "../data/proactive/highApproachProactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";
import sendResults from "../hooks/sendData";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [breakDone, setBreakDone] = useState(false);

  const [proFirstTryResult, setProFirstTryResult] = useState([]);
  const [proSecoundTryResult, setProSecoundTryResult] = useState([]);
  const [horizontStyling, setHorizontStyling] = useState({});
  const nickname = localStorage.getItem("nickname");
  useEffect(() => {
    if (proFirstTryResult.length !== 0 && breakDone === false) {
      sendResults(nickname, "proactive/low/", proFirstTryResult);
      setTestDone(true);
    }
    if (breakDone === true) {
      setTestDone(false);
    }
    if (proSecoundTryResult.length !== 0) {
      sendResults(nickname, "proactive/high/", proSecoundTryResult);
      setTestDone(true);
    }
  }, [proFirstTryResult, proSecoundTryResult, breakDone]);

  return (
    <div className="container" style={horizontStyling}>
      {!instructionsDone && (
        <TutorialInstrunction func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !breakDone && (
        <DisplayTest
          sequence={lowApproach}
          getData={setProFirstTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {testDone && !breakDone && <Clock func={setBreakDone} />}
      {instructionsDone && !testDone && breakDone && (
        <DisplayTest
          sequence={highApproach}
          getData={setProSecoundTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {instructionsDone && testDone && breakDone && <Finish from="proactive" />}
    </div>
  );
}
