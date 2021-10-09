import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Layout from "./Layout";
import dataValidation from "../utils/dataValidation";
import sendResults from "../utils/sendData";

const takeCareOfData = (result) => {
  const nickname = localStorage.getItem("nickname");
  sendResults(nickname, "trening/", result);
};

export default function TestValidation({ data, dispatch }) {
  const [correct, setCorrect] = useState(null);
  const newData = data;
  const NUMBER_OF_CORRECT = 1;

  useEffect(() => {
    const results = dataValidation(newData);
    const correctAnswers = results.filter((result) => result.correct);
    setCorrect(correctAnswers.length);
    if (correctAnswers.length >= NUMBER_OF_CORRECT) {
      takeCareOfData(data);
    }
  }, [newData]);

  return (
    <Layout>
      <div className="container__result container--small container--blue">
        {correct >= NUMBER_OF_CORRECT && correct !== null && (
          <>
            <h3>Świetnie sobie poradziłeś!</h3>
            <p>
              Udało Ci się udzielić poprawniej odpowiedzieć na {correct}/
              {newData.length} bloków! Zaraz zacznie się pierwsze z dwóch zadań
              przewidzianych na dziejszy dzień.
            </p>
            <Link
              to={{
                pathname: "/experiment",
                state: { type: "reactive" },
              }}
            >
              <Button type="button" name="Zacznij zadanie" />
            </Link>
          </>
        )}
        {correct < NUMBER_OF_CORRECT && correct !== null && (
          <>
            <h3>
              Niestety, nie udzieliłeś prawidłowej odpowiedzi na większośc
              pytań.
            </h3>
            <p>
              Przeczytaj instrukcję raz jeszcze i ponownie wykonaj sesje
              treningową.
            </p>
            <Button
              name="Zacznij jeszcze raz"
              func={() => dispatch({ type: "failedTest" })}
            />
          </>
        )}
      </div>
    </Layout>
  );
}
