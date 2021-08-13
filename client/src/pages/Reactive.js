import React, { useEffect, useState } from "react";
import reactiveText from "../public/reactiveText.json";
import TutorialBox from "../components/TutorialBox";
import lowApproach from "../data/reactive/lowApproachReactive.json";
import highApproach from "../data/reactive/highApproachReactive.json";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";
import axios from "axios";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [refirstTryResult, setReFirstTryResult] = useState([]);
  const [resecoundTryResult, setReSecoundTryResult] = useState([]);
  const [brakeDone, setBrakeDone] = useState(false);
  const [horizontStyling, setHorizontStyling] = useState({});
  const nickname = localStorage.getItem("nickname");
  useEffect(() => {
    if (refirstTryResult.length !== 0) {
      setTestDone(true);
      refirstTryResult.forEach((e) => (e.nickname = nickname));
      axios
        .post(
          "http://localhost:5000/reactive/low/" + nickname,
          refirstTryResult
        )
        .then((res) => console.log(res));
    }
    if (brakeDone === true) {
      setTestDone(false);
    }
    if (resecoundTryResult.length !== 0) {
      resecoundTryResult.forEach((e) => (e.nickname = nickname));

      axios
        .post(
          "http://localhost:5000/reactive/high/" + nickname,
          resecoundTryResult
        )
        .then((res) => console.log(res));
      setTestDone(true);
    }
  }, [refirstTryResult, resecoundTryResult, brakeDone, nickname]);
  console.log(refirstTryResult);
  console.log(resecoundTryResult);

  return (
    <div className="container" style={horizontStyling}>
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && !testDone && !brakeDone && (
        <DisplayTest
          sequence={lowApproach}
          getData={setReFirstTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {testDone && !brakeDone && <Clock func={setBrakeDone} />}
      {instructionsDone && !testDone && brakeDone && (
        <DisplayTest
          sequence={highApproach}
          getData={setReSecoundTryResult}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {instructionsDone && testDone && brakeDone && <Finish from="rective" />}
    </div>
  );
}
