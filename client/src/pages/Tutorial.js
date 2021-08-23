import React, { useState, useEffect } from "react";
import TutorialBox from "../components/TutorialBox";
import instructionsData from "../assets/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import TestValidation from "../components/TestValidation";
import sequenceData from "../data/tutorial.json";
// import { NicknameContext } from "../nicknameContext";
import sendResults from "../hooks/sendData";

const instructionData = [...instructionsData];

// const testData = JSON.parse(sequenceData);

export default function Tutorial() {
  const [tutorialDone, setTutorialDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [result, setResult] = useState([]);
  const [failedTest, setFailedTest] = useState(false);
  // const [nickname, setNickname] = useContext(NicknameContext);
  const nickname = localStorage.getItem("nickname");

  useEffect(() => {
    if (result.length !== 0) {
      sendResults(nickname, "trening/", result);
      setTestDone(true);
    }
    if (failedTest) {
      setTutorialDone(false);
      setTestDone(false);
      setResult([]);
      setFailedTest(false);
    }
    if (testDone && !failedTest && result.length !== 0) {
      sendResults(nickname, "trening/", result);
    }
  }, [result]);
  return (
    <div className="container">
      {!tutorialDone && (
        <TutorialBox func={setTutorialDone} data={instructionData} />
      )}
      {tutorialDone && !testDone && (
        <DisplayTest sequence={sequenceData} getData={setResult} />
      )}
      {testDone && (
        <TestValidation data={result} setFailedTest={setFailedTest} />
      )}
    </div>
  );
}
