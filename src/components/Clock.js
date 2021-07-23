import React, { useEffect, useState } from "react";

export default function Clock({ func }) {
  const [clock, setClock] = useState(5);
  useEffect(() => {
    const tick = setInterval(() => {
      setClock(clock - 1);
    }, 1000);
    if (clock === 0) {
      func(true);
    }
    return function cleanUp() {
      clearInterval(tick);
    };
  });

  return (
    <div className="clock__container">
      <h1>{clock}</h1>
      <p>
        Odpocznij, zreklasuj się. Gdy timer skończy odliczać zacznie się
        ostatnia sesja tego dnia.
      </p>
    </div>
  );
}
