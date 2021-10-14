import { useEffect, useState } from "react";
import instructionText from "../assets/index";
import WrongAudio from "../assets/audio/Wrong.wav";
import NoGoErrorAudio from "../assets/audio/NoGoError.wav";

export default function Instruction({ dispatch, type }) {
  const [phase, setPhase] = useState(0);
  const [next, setNext] = useState(false);
  const data = instructionText[type];

  const DELAY = 1000;
  async function handleKey(e) {
    setNext(true);
    if (e.key === " ") {
      setNext(false);

      setPhase(phase + 1);
    }
  }
  useEffect(() => {
    const delayOfClick = setTimeout(() => {
      document.addEventListener("keydown", handleKey);
      setNext(true);
    }, DELAY);
    if (phase === data.length - 1) {
      dispatch({ type: "displayTest" });
    }
    if (phase === 10) {
      const audio = new Audio(WrongAudio);

      audio.play();
    }
    if (phase === 11) {
      const audio = new Audio(NoGoErrorAudio);

      audio.play();
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      clearTimeout(delayOfClick);
    };
  }, [phase]);

  return (
    <div data-testid="tutorial__container" className="tutorial__container">
      <div
        data-testid="tutorial__box"
        className={`tutorial__box ${
          data[phase].boxVisible && "tutorial__box--visible"
        }`}
      >
        <p data-testid="tutorial__letter" className="tutorial__letter">
          {data[phase].boxContent}
        </p>
      </div>
      <div className="tutorial__text">
        <h3 data-testid="tutorial__header" className="tutorial__header">
          {data[phase].header}
        </h3>
        <p data-testid="tutorial__para" className="tutorial__para">
          {data[phase].para}
        </p>
        <p
          data-testid="tutorial__alert"
          className={`tutorial__alert ${next && "tutorial__alert--visibile"}`}
        >
          <strong>Naciśnij Spację aby kontyunować</strong>
        </p>
      </div>
    </div>
  );
}
