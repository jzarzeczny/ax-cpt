import React from "react";

const dataValidation = (data) => {
  let re = [];
  data.map((iteration) => {
    if (
      iteration.warriety === "AX" &&
      iteration.clueResponse &&
      iteration.probeResponse === "L"
    ) {
      let object = {
        id: iteration.id,
        warriery: iteration.warriety,
        clueResponse: iteration.clueResponse,
        probeResponse: iteration.probeResponse,
        correct: true,
      };
      re.push(object);
    }
    if (
      iteration.warriety === "AY" &&
      iteration.clueResponse &&
      iteration.probeResponse === "A"
    ) {
      let object = {
        id: iteration.id,
        warriery: iteration.warriety,
        clueResponse: iteration.clueResponse,
        probeResponse: iteration.probeResponse,
        correct: true,
      };
      re.push(object);
    }
    if (
      iteration.warriety === "BX" &&
      iteration.clueResponse &&
      iteration.probeResponse === "A"
    ) {
      let object = {
        id: iteration.id,
        warriery: iteration.warriety,
        clueResponse: iteration.clueResponse,
        probeResponse: iteration.probeResponse,
        correct: true,
      };
      re.push(object);
    }
    if (
      iteration.warriety === "BY" &&
      iteration.clueResponse &&
      iteration.probeResponse === "L"
    ) {
      let object = {
        id: iteration.id,
        warriery: iteration.warriety,
        clueResponse: iteration.clueResponse,
        probeResponse: iteration.probeResponse,
        correct: true,
      };
      re.push(object);
    }
    if (
      iteration.warriety === "No-go" &&
      iteration.clueResponse &&
      iteration.probeResponse === "no answer"
    ) {
      let object = {
        id: iteration.id,
        warriery: iteration.warriety,
        clueResponse: iteration.clueResponse,
        probeResponse: iteration.probeResponse,
        correct: true,
      };
      re.push(object);
    }
  });
  return re;
};

export default function TestValidation({ data }) {
  console.log(data);
  const results = dataValidation(data);
  console.log(results);
  const correctAnswers = results.map((result) => result.correct === true);
  console.log(correctAnswers.length);

  return (
    <div className="resultContainer">
      <h1>Hi there!</h1>
    </div>
  );
}
