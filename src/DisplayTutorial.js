import { useState } from "react";

import Trening from "./strategy/Trening";

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const DisplayTutorial = () => {
  const [alert, setAlert] = useState(true);

  async function prep() {
    await sleep(3000);
    setAlert(false);
  }
  prep();
  return (
    <div className="paper">
      {alert && (
        <div className="intro">
          <h3>Za 3 sekundy zacznie się zadanie treningowe...</h3>
        </div>
      )}
      {!alert && <Trening />}
    </div>
  );
};

export default DisplayTutorial;
