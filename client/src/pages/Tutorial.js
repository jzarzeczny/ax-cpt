import { useState, useEffect, useReducer } from "react";
import TutorialInstrunction from "../components/TutorialInstrunction";
import instructionsData from "../assets/tutorialText.json";
import DisplayTest from "../components/DisplayTest";
import TestValidation from "../components/TestValidation";
const instructionData = [...instructionsData];

const initialState = { phase: "displayTutorial" };

function reducer(state, action) {
  switch (action.type) {
    case "displayTutorial":
      return { phase: "displayTutorial" };
    case "displayTest":
      return { phase: "displayTest" };
    case "displayValidation":
      return { phase: "displayValidation" };
    case "failedTest":
      return { phase: "failedTest" };
    default:
      throw new Error();
  }
}

export default function Tutorial() {
  const [result, setResult] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (result.length !== 0) {
      dispatch({ type: "displayValidation" });
    }
  }, [result, state.phase]);
  if (state.phase === "failedTest") {
    setResult([]);
    dispatch({ type: "displayTutorial" });
  }
  return (
    <div className="container">
      {state.phase === "displayTutorial" && (
        <TutorialInstrunction dispatch={dispatch} data={instructionData} />
      )}
      {state.phase === "displayTest" && (
        <DisplayTest type="tutorial" getData={setResult} />
      )}
      {state.phase === "displayValidation" && (
        <TestValidation data={result} dispatch={dispatch} />
      )}
    </div>
  );
}
