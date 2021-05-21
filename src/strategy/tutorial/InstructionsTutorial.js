import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Tutorial = () => {
  const [phase, setPhase] = useState(0);

  let history = useHistory();

  async function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  let content;
  function displayInstructions(phase) {
    if (phase === 0) {
      return (
        <>
          <h3>Witam!</h3>
          <p>
            To zadanie polega na reagowani na pary liter tak szybko i dokładnie
            jak to tylko możliwe.
          </p>
        </>
      );
    } else if (phase === 1) {
      return (
        <>
          <h3>Podczas każdej próby</h3>
          <ul>
            <li>Zobaczysz pierwszą literę</li>
            <li>Poczekaj, nastąpi długa przerwa</li>
            <li>Zobaczysz drugą literę w czarnej ramce</li>
          </ul>
          <p>Będziesz reagował na każdą literę.</p>
          <p>Kiedy zobaczysz piewszą literę, zawsze naciskaj klawisz A</p>
        </>
      );
    } else if (phase === 2) {
      return (
        <>
          <h3>Celem zadania jest wykrycie pary liter "A-X".</h3>
          <p>
            Jeśli wykryjesz tę parę liter <br />
            (tj. pierwsza litera w próbie jest literą A, a druga litera to X),
            <br />
            wcisnąć przycisk 2 (L) tak szybko, jak to możliwe.
            <br />
            <br /> Pamiętaj, że zawsze będziesz naciskać przycisk 1 (A), gdy
            zobaczysz pierwszą literę.
            <br />
            <br />
            <br /> Innymi słowy, powinieneś/-aś: <br />
          </p>
          <ul>
            <li>wcisnąć przycisk 1 (A), gdy pojawi się pierwsza litera</li>
            <li>
              nacisnąć przycisk 2 (L), jeśli drugą literą, którą widzisz na
              ekranie jest X, a poprzednia była A
            </li>
          </ul>
        </>
      );
    } else if (phase === 3) {
      return (
        <>
          <h3>Jeśli NIE widzisz pary A-X, to powinieneś/-aś:</h3>
          <p>
            - naciśnąć przycisk 1 (A), gdy pojawi się pierwsza litera <br />-
            naciśnąć przycisk (A), jeśli druga litera nie należy do pary A-X
          </p>
        </>
      );
    } else if (phase === 4) {
      return (
        <>
          <p>
            W niektórych przypadkach, drugi bodziec nie będzie wcale literą, ale
            cyfrą.
            <br />W tych przypadkach, nie naciskaj ani przycisku 1 ani przycisku
            2. Po prostu czekaj, aż bodziec zniknie.
          </p>
        </>
      );
    } else if (phase === 5) {
      return (
        <>
          <p>
            Masz tylko 1 sekundę, aby zareagować na każdy bodziec, więc
            powinieneś/-aś zareagować tak szybko i dokładnie, jak to możliwe.
          </p>
        </>
      );
    } else if (phase === 6) {
      return (
        <>
          <h3>Oto kilka przykładów, które pomogą ci zrozumieć zadanie.</h3>
          <p>
            <br />
            Próba pierwsza: widzisz A, następuje długa przerwa, widzisz X.
            Powinieneś/-aś wcisnąć przycisk 1(A), gdy pojawi się A, i przycisk 2
            (L), gdy pojawi się X. <br />
            Próba druga: widzisz B, następuje długa przerwa, widzisz X.
            Powinieneś wcisnąć przycisk 1 (A), gdy pojawi się B, i przycisk 1
            (A), gdy pojawi się X. <br />
            Próba trzecia: widzisz A, jest duże opóźnienie, widzisz 6.
            Powinieneś wcisnąć przycisk 1 (A), gdy pojawi się A, i w ogóle nie
            reagować, gdy zobaczysz 6.
          </p>
        </>
      );
    } else if (phase === 7) {
      return (
        <>
          <h3>I jeszcze jedna, ostatnia rzecz:</h3>
          <p>
            By prowadzić cię podczas zadania, usłyszysz dźwięk za każdym razem,
            gdy popełnisz błąd.
            <br />
            Jeśli zareagujesz za wolno, usłyszysz dźwięk "pukania".
          </p>
        </>
      );
    } else if (phase === 8) {
      return (
        <>
          <h3>Jeśli nacisniesz niewłaściwy przycisk odpowiedzi</h3>
          <p>
            (tzn. naciśniesz przycisk 2 (L), ale nie zobaczyłeś/-aś pary liter
            "A-X", albo przycisk 1 (A), ale zobaczysz parę liter "A-X"),
            usłyszysz dźwięk "brzęczenia".
          </p>
        </>
      );
    } else if (phase === 9) {
      return (
        <>
          <p>
            W końcu, jeśli naciśniesz jakiś przycisk <br />w odpowiedzi na cyfrę
            (pamiętaj, że nigdy nie powinieneś/-aś naciskać przycisku
            odpowiedzi, gdy drugim bodźcem jest cyfra), usłyszysz dźwięk
            "dee-dum".
          </p>
        </>
      );
    } else if (phase === 10) {
      return (
        <>
          <h3>
            Jeśli zadanie nie jest jasne, proszę powiadom o tym teraz
            eksperymentatora.
          </h3>
          <p>
            Bardzo ważne jest, abyś w pełni zrozumiał/-a zadanie. Jeśli nie masz
            żadnych pytań, zacznijmy trening. Umieść swój palec wskazujący na
            przycisku 1, i twój środkowy palec na przycisku 2.
          </p>
        </>
      );
    } else if (phase === 11) {
      return history.push("/displaytutorial");
    }
  }

  content = displayInstructions(phase);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });
  console.log(phase);
  return (
    <div className="paper">
      <div className="intro">
        {content}

        <p className="space">
          <br />
          <strong>Naciśnij SPACJĘ aby kontynuować</strong>
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
