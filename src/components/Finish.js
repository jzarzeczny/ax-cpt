import React from "react";

export default function Finish({ from }) {
  return (
    <>
      {from === "reactive" && (
        <div>
          <h1>Bardzo dziękuje Ci za udział w badania!</h1>
          <p>
            Pamiętaj, cały ekpseryment składa się z dwóch dni. Jutrzejsza próba
            jest ta samo ważna!
            <br />
            Jeżeli masz jakieś pytania, wróć na stronę główną i naciśnij
            przycisk "Kontakt".
            <br />
          </p>
        </div>
      )}
      {from === "proactive" && (
        <div>
          <h1>Bardzo dziękuje Ci za udział w badania!</h1>
          <p>
            Twoja pomoc jest nieoceniona.
            <br />
            Jeżeli masz jakieś pytania, wróć na stronę główną i naciśnij
            przycisk "Kontakt".
            <br />
            Bardzo dziękuje!
          </p>
        </div>
      )}
    </>
  );
}
