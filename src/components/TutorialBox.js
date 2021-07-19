import React, { useEffect } from "react";

export default function TutorialBox({
  boxVisible,
  boxContent,
  header,
  para,
  func,
}) {
  console.log(boxVisible);
  useEffect(() => {
    document.addEventListener("keydown", func);
    return () => {
      document.removeEventListener("keydown", func);
    };
  });
  return (
    <div className="tutorial__container">
      <div
        data-testid="tutorial__box"
        className={`tutorial__box ${boxVisible && "tutorial__box--visible"}`}
      >
        <p data-testid="tutorial__letter" className="tutorial__letter">
          {boxContent}
        </p>
      </div>
      <div className="tutorial__text">
        <h3 data-testid="tutorial__header" className="tutorial__header">
          {header}
        </h3>
        <p data-testid="tutorial__para" className="tutorial__para">
          {para}
        </p>
        <p data-testid="tutorial__alert" className="tutorial__alert">
          <strong>Naciśnij Spację aby kontyunować</strong>
        </p>
      </div>
    </div>
  );
}
