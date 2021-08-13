import React, { useEffect, useState } from "react";
import reactiveText from "../public/proactiveText.json";
import TutorialBox from "../components/TutorialBox";
import lowApproach from "../data/proactive/lowApproachProactive.json";
import highApproach from "../data/proactive/highApproachProactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";
import axios from "axios";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [proFirstTryResult, setProFirstTryResult] = useState([]);
  const [proSecoundTryResult, setProSecoundTryResult] = useState([]);
  const [brakeDone, setBrakeDone] = useState(false);
  const [horizontStyling, setHorizontStyling] = useState({});
  const nickname = localStorage.getItem("nickname");
  useEffect(() => {
    if (proFirstTryResult.length !== 0) {
      setTestDone(true);
      proFirstTryResult.forEach((e) => (e.nickname = nickname));
      axios
        .post(
          "http://localhost:5000/reactive/low/" + nickname,
          proFirstTryResult
        )
        .then((res) => console.log(res));
      setTestDone(true);
    }
    if (brakeDone === true) {
      setTestDone(false);
    }
    if (proSecoundTryResult.length !== 0) {
      proSecoundTryResult.forEach((e) => (e.nickname = nickname));
      axios
        .post(
          "http://localhost:5000/reactive/low/" + nickname,
          proSecoundTryResult
        )
        .then((res) => console.log(res));
      setTestDone(true);
    }
  }, [proFirstTryResult, proSecoundTryResult, brakeDone, nickname]);

  return (
    <div className="container" style={horizontStyling}>
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !brakeDone && (
        <DisplayTest
          sequence={lowApproach}
          getData={setProFirstTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {testDone && !brakeDone && <Clock func={setBrakeDone} />}
      {instructionsDone && !testDone && brakeDone && (
        <DisplayTest
          sequence={highApproach}
          getData={setProSecoundTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {instructionsDone && testDone && brakeDone && <Finish from="proactive" />}
    </div>
  );
}
