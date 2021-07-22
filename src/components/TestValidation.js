import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const dataValidation = (data) => {
  console.log(data);
  console.log(typeof data);
  let re = [];
  data.forEach((iteration) => {
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

export default function TestValidation({ data, setFailedTest }) {
  const [correct, setCorrect] = useState(null);
  const newData = data;
  useEffect(() => {
    const results = dataValidation(newData);
    const correctAnswers = results.map((result) => result.correct === true);
    setCorrect(correctAnswers.length);
  }, [newData]);

  return (
    <div className="resultContainer">
      {correct > 3 && (
        <>
          <h3>Świetnie sobie poradziłeś! </h3>
          <p>
            Udało Ci się udzielić poprawniej odpowiedzieć na {correct}/
            {data.length} bloków! Zaraz zacznie się pierwsze z dwóch zadań
            przewidzianych na dziejszy dzień.
          </p>
          <Link to="/testing">
            <Button type="button" name="Zacznij zadanie" />
          </Link>
        </>
      )}
      {correct < 3 && correct !== null && (
        <>
          <h3>
            Niestety, nie udzieliłeś prawidłowej odpowiedzi na większośc pytań.
          </h3>
          <p>
            Przeczytaj instrukcję raz jeszcze i ponownie wykonaj sesje
            treningową.
          </p>
          <Button name="Zacznij jeszcze raz" func={() => setFailedTest(true)} />
        </>
      )}
    </div>
  );
}
// Validation -> decisiton making -> display correct content -> change state to render correct screen either instuction of test one more time or reactive test!
