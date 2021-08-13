import React, { useState, useEffect, useContext } from "react";
import TutorialBox from "../components/TutorialBox";
import instructionsData from "../public/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import TestValidation from "../components/TestValidation";
import sequenceData from "../data/tutorial.json";
// import { NicknameContext } from "../nicknameContext";
import axios from "axios";

const instructionData = [...instructionsData];

const sendResults = (nickname, data) => {
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post("http://localhost:5000/trening/" + nickname.nickname, data)
    .then((res) => console.log(res));
};

// const testData = JSON.parse(sequenceData);

export default function Tutorial() {
  const [tutorialDone, setTutorialDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [result, setResult] = useState([]);
  const [failedTest, setFailedTest] = useState(false);
  // const [nickname, setNickname] = useContext(NicknameContext);
  const nickname = localStorage.getItem("nickname");
  console.log(nickname);
  useEffect(() => {
    if (result.length !== 0) {
      setTestDone(true);
      sendResults(nickname, result);
      console.log(result);
    }
    if (failedTest) {
      setTutorialDone(false);
      setTestDone(false);
      setResult([]);
      setFailedTest(false);
    }
    if (testDone && !failedTest) {
      sendResults(nickname, result);
    }
  }, [result, failedTest, nickname, testDone]);
  return (
    <div className="container">
      {!tutorialDone && (
        <TutorialBox func={setTutorialDone} data={instructionData} />
      )}
      {tutorialDone && !testDone && (
        <DisplayTest sequence={sequenceData} getData={setResult} />
      )}
      {testDone && !failedTest && (
        <TestValidation data={result} setFailedTest={setFailedTest} />
      )}
    </div>
  );
}
