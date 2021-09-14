import React, { useEffect, useState } from "react";

export default function TutorialInstrunction({ func, data }) {
  const [phase, setPhase] = useState(0);
  const [next, setNext] = useState(false);
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
    }, 0);
    if (phase === data.length - 1) {
      func({ type: "displayTest" });
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      clearTimeout(delayOfClick);
    };
  });
  console.log("rerender");
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
