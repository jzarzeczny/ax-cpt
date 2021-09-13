import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Layout from "./Layout";
import dataValidation from "../hooks/dataValidation";

export default function TestValidation({ data, setFailedTest }) {
  const [correct, setCorrect] = useState(null);
  const newData = data;
  useEffect(() => {
    const results = dataValidation(newData);
    const correctAnswers = results.map((result) => result.correct === true);
    setCorrect(correctAnswers.length);
  }, [newData]);
  return (
    <Layout>
      <div className="container__result container--small container--blue">
        {correct >= 1 && correct !== null && (
          <>
            <h3>Świetnie sobie poradziłeś!</h3>
            <p>
              Udało Ci się udzielić poprawniej odpowiedzieć na {correct}/
              {newData.length} bloków! Zaraz zacznie się pierwsze z dwóch zadań
              przewidzianych na dziejszy dzień.
            </p>
            <Link to="/reactive">
              <Button type="button" name="Zacznij zadanie" />
            </Link>
          </>
        )}
        {correct < 1 && correct !== null && (
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
              func={() => setFailedTest(true)}
            />
          </>
        )}
      </div>
    </Layout>
  );
}
