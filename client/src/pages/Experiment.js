import { useEffect, useReducer, useState } from "react";
import Instruction from "../components/Instruction";
import DisplayTest from "../components/DisplayTest";
import Clock from "../components/Clock";
import Finish from "../components/Finish";
import sendResults from "../utils/sendData";
import { useLocation } from "react-router-dom";

const initialState = { phase: "displayInstructions" };

function reducer(state, action) {
  switch (action.type) {
    case "displayTest":
      return { phase: "displayTest", sequence: "low" };
    case "displayBreak":
      return { phase: "displayBreak", sequence: "" };
    case "breakDone":
      return { phase: "displayTest2", sequence: "high" };
    case "experimentDone":
      return { phase: "displayOutro", sequence: "" };
    default:
      throw new Error();
  }
}

export default function Experiment() {
  const [firstResults, setFirstResults] = useState([]);
  const [secondResults, setSecondResults] = useState([]);
  const [horizontStyling, setHorizontStyling] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);
  const nickname = localStorage.getItem("nickname");
  const location = useLocation();
  const { type } = location.state;
  useEffect(() => {
    if (firstResults.length !== 0 && state.phase === "displayTest") {
      sendResults(nickname, type + "/" + state.sequence + "/", firstResults);
      dispatch({ type: "displayBreak" });
    }

    if (secondResults.length !== 0) {
      sendResults(nickname, type + "/" + state.sequence + "/", secondResults);
      dispatch({ type: "experimentDone" });
    }
  }, [firstResults, secondResults, state]);

  return (
    <div className="container" style={horizontStyling}>
      {state.phase === "displayInstructions" && (
        <Instruction dispatch={dispatch} type={type} />
      )}
      {state.phase === "displayTest" && (
        <DisplayTest
          type={type}
          sequence={state.sequence}
          getData={setFirstResults}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {state.phase === "displayBreak" && <Clock dispatch={dispatch} />}
      {state.phase === "displayTest2" && (
        <DisplayTest
          type={type}
          sequence={state.sequence}
          getData={setSecondResults}
          setHorizontStyling={setHorizontStyling}
        />
      )}
      {state.phase === "displayOutro" && <Finish from={type} />}
    </div>
  );
}
