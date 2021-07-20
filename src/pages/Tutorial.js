import React, { useState, useEffect } from "react";
import TutorialBox from "../components/TutorialBox";
import jsonData from "../public/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import testDataJSON from "../data/tutorial.json";
const data = [...jsonData];
// const testData = JSON.parse(testDataJSON);
export default function Tutorial() {
  const [phase, setPhase] = useState(0);
  const [tutorialDone, setTutorialDone] = useState(false);
  function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  useEffect(() => {
    if (phase === data.length - 1) {
      setTutorialDone(true);
    }
  }, [phase]);

  return (
    <div className="container">
      {!tutorialDone && (
        <TutorialBox
          boxVisible={data[phase].boxVisible}
          boxContent={data[phase].boxContent}
          header={data[phase].header}
          para={data[phase].para}
          func={handleKey}
        />
      )}
      {tutorialDone && (
        <DisplayTest
          route={testDataJSON.route}
          sequence={testDataJSON.sequence}
        />
      )}
    </div>
  );
}
