import React, { useState } from "react";
import TutorialBox from "../components/TutorialBox";
import jsonData from "../public/tutorialText.json";

async function handleKey(e) {
  if (e.key === " ") {
    console.log("Spacja!");
  }
}

const data = [...jsonData];
console.log(data);
export default function Tutorial() {
  const [phase, setPhase] = useState(0);
  return (
    <div className="container">
      <TutorialBox
        boxVisible={true}
        boxContent="A"
        header="Sprawdzam czy działa"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur assumenda tenetur minima cumque? Quam veniam in, maiores reprehenderit impedit, quidem, veritatis eveniet ipsum libero ea rerum similique mollitia aspernatur."
        func={handleKey}
      />
    </div>
  );
}
