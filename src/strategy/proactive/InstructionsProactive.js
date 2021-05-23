import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Tutorial = () => {
  const [phase, setPhase] = useState(-1);

  let history = useHistory();

  async function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  let content;
  function displayInstructions(phase) {
    if (phase === -1) {
      return (
        <>
          <h2>Zaraz zacznie się pierwsze zadanie</h2>
          <p>Zapoznaj się proszę ponownie z instrukcją.</p>
        </>
      );
    }

    if (phase === 0) {
      return (
        <>
          <h3>Wytyczne do pierwszego zadania</h3>
          <ul>
            <li>
              Pamiętaj aby zawsze nacisnąć przycisk 1 (klawisz A) po pojawieni
              się pierwszej litery.
            </li>
            <li>
              W tej wersji kolor obramowania drugiej litery oraz jej
              lokalizacja, będzie się zmieniać.
            </li>
            <li>
              Proszę, udzielaj odpowiedzi do liter, a nie do obramowania lub
              koloru.
            </li>
          </ul>
        </>
      );
    } else if (phase === 1) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">A</p>
          </div>
          <p className="description">
            Zawsze naciskaj przycisk jeden (Klawisz A) kiedy pojawia się
            pierwsza litera.
          </p>
        </>
      );
    } else if (phase === 2) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">+ + +</p>
          </div>
        </>
      );
    } else if (phase === 3) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">X</p>
          </div>
          <p className="description">
            Ponieważ pierwszą literą w sekwencji było A, a drugą jest X,
            powinieneś naciśnąć przycisk 2 (klawisz L). Zawse naciskaj przycisk
            2, kiedy widzisz parę liter AX.
          </p>
        </>
      );
    } else if (phase === 4) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">
              {"  "}
              +<br />+{"  "}+
            </p>
          </div>
          <p className="description">
            Ten symbol wskazuje koniec sekwencji. Przygotuj się do kolejnej pary
            liter.
          </p>
        </>
      );
    } else if (phase === 5) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">B</p>
          </div>
          <p className="description">
            Zawsze naciskaj przycisk 1 (klawisz A) kiedy pojawia się pierwsza
            litera.
          </p>
        </>
      );
    } else if (phase === 6) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">+ + +</p>
          </div>
        </>
      );
    } else if (phase === 7) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">X</p>
          </div>
          <p className="description">
            Ponieważ pierwszą literą, którą zobaczyłeś było B, a drugą literą
            jest X, powinieneś nacisnać przycisk 1 (klawisz A). Naciskaj
            przycisk 1, kiedy para liter NIE tworzy pary AX.
          </p>
        </>
      );
    } else if (phase === 8) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">
              {"  "}
              +<br />+{"  "}+
            </p>
          </div>
          <p className="description">
            Ten symbol wskazuje koniec sekwencji. Przygotuj się do kolejnej pary
            liter.
          </p>
        </>
      );
    } else if (phase === 9) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">G</p>
          </div>
          <p className="description">
            Zawsze naciskaj przycisk 1 (klawisz A) kiedy pojawia się pierwsza
            litera.
          </p>
        </>
      );
    } else if (phase === 10) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">+ + +</p>
          </div>
        </>
      );
    } else if (phase === 11) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">3</p>
          </div>
          <p className="description">
            Jeżeli drugą literą jest cyfra, nie naciskaj żadnego przycisku.
          </p>
        </>
      );
    } else if (phase === 12) {
      return (
        <>
          <div className="instructionBox">
            <p className="letterInBox">
              {"  "}
              +<br />+{"  "}+
            </p>
          </div>
          <p className="description">
            Ten symbol wskazuje koniec sekwencji. Przygotuj się do kolejnej pary
            liter.
          </p>
        </>
      );
    } else if (phase === 13) {
      return (
        <>
          <p className="description">
            Trening został zakończony, zaraz zacznie się test.
          </p>
        </>
      );
    } else if (phase === 14) {
      return history.push({
        pathname: "/displayproactive",
        state: { trail: 1 },
      });
    }
  }
  content = displayInstructions(phase);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });
  return (
    <div className="paper">
      <div className="container">
        {content}

        <p className="space">Naciśnij SPACJĘ aby kontynuować</p>
      </div>
    </div>
  );
};

export default Tutorial;
