import React, { useEffect, useState } from "react";

export default function TutorialBox({ func, data }) {
  const [phase, setPhase] = useState(0);
  function handleKey(e) {
    if (e.key === " ") {
      setPhase(phase + 1);
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    if (phase === data.length - 1) {
      func(true);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });
  return (
    <div className="tutorial__container">
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
        <p data-testid="tutorial__alert" className="tutorial__alert">
          <strong>Naciśnij Spację aby kontyunować</strong>
        </p>
      </div>
    </div>
  );
}
