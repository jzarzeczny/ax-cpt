import React, { useState, useEffect } from "react";
import TutorialBox from "../components/TutorialBox";
import instructionsData from "../public/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import TestValidation from "../components/TestValidation";
import sequenceData from "../data/tutorial.json";
const instructionData = [...instructionsData];
// const testData = JSON.parse(sequenceData);
export default function Tutorial() {
  const [tutorialDone, setTutorialDone] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [result, setResult] = useState([]);
  const [failedTest, setFailedTest] = useState(false);

  useEffect(() => {
    if (result.length !== 0) {
      setTestDone(true);
    }
    if (failedTest) {
      setTutorialDone(false);
      setTestDone(false);
      setResult([]);
      setFailedTest(false);
    }
  }, [result, failedTest]);
  return (
    <div className="container">
      {!tutorialDone && (
        <TutorialBox func={setTutorialDone} data={instructionData} />
      )}
      {tutorialDone && !testDone && (
        <DisplayTest sequence={sequenceData.sequence} getData={setResult} />
      )}
      {testDone && !failedTest && (
        <TestValidation data={result} setFailedTest={setFailedTest} />
      )}
    </div>
  );
}
