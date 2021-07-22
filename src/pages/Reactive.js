import React, { useEffect, useState } from "react";
import reactiveText from "../public/reactiveText.json";
import TutorialBox from "../components/TutorialBox";

export default function Reactive() {
  const [instructionsDone, setInstructionsDone] = useState(false);
  useEffect(() => {});
  return (
    <div className="container">
      {!instructionsDone && (
        <TutorialBox func={setInstructionsDone} data={reactiveText} />
      )}
      {instructionsDone && <h1>Did it boy!</h1>}
    </div>
  );
}
