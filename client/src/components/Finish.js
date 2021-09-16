import Header from "../components/Header";

export default function Finish({ from }) {
  return (
    <>
      <Header />
      {from === "reactive" && (
        <div>
          <h1>Bardzo dziękuje Ci za udział w badania!</h1>
          <p>
            Pamiętaj, cały ekpseryment składa się z dwóch dni. Jutrzejsza próba
            jest ta samo ważna!
            <br />
            <br />
            Możesz teraz zamknąć okno przeglądarki, twoje wyniki zostały
            zapisane.
            <br />
            <br />
            Jeżeli masz jakieś pytania, na górze strony znajduje się przycik
            Kontakt.
          </p>
        </div>
      )}
      {from === "proactive" && (
        <div>
          <h1>Bardzo dziękuje Ci za udział w badania!</h1>
          <p>
            Twoja pomoc jest nieoceniona.
            <br />
            <br />
            Twoje wyniki zostały zapisane.
            <br />
            <br />
            Jeżeli masz jakieś pytania, na górze strony znajduje się przycik
            Kontakt.
            <br />
            <br />
            Bardzo dziękuje!
          </p>
        </div>
      )}
    </>
  );
}
