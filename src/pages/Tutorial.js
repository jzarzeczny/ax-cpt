import React, { useState, useEffect } from "react";
import TutorialBox from "../components/TutorialBox";
import jsonData from "../public/tutorialText.json";

const data = [...jsonData];

export default function Tutorial() {
  const [phase, setPhase] = useState(0);
  const [tutorialDone, setTutorialDone] = useState(false);
  function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
      console.log(phase);
      console.log(data.length);
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
      {tutorialDone && <h1>Counting now!</h1>}
    </div>
  );
}
