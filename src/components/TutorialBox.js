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
      <div className={`tutorial__box ${boxVisible && "tutorial__box-visible"}`}>
        <p className="tutorial__letter">{boxContent}</p>
      </div>
      <div className="tutorial__text">
        <h3 className="tutorial__header">{header}</h3>
        <p className="tutorial__para">{para}</p>
        <p className="tutorial__alert">
          <strong>Naciśnij Spację aby kontyunować</strong>
        </p>
      </div>
    </div>
  );
}
