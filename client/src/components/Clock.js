import { useEffect, useState } from "react";

export default function Clock({ dispatch }) {
  const [clock, setClock] = useState(60);
  useEffect(() => {
    const tick = setInterval(() => {
      setClock(clock - 1);
    }, 1000);
    if (clock === 0) {
      dispatch({ type: "breakDone" });
    }
    return function cleanUp() {
      clearInterval(tick);
    };
  }, [clock]);

  return (
    <div className="clock__container">
      <h1>{clock}s</h1>
      <p data-testid="clock-paragraph">
        Odpocznij, zreklasuj się. Gdy timer skończy odliczać zacznie się
        ostatnia sesja tego dnia.
      </p>
    </div>
  );
}
