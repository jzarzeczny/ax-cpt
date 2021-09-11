import React from "react";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="container">
      <Header />
      <div className="contactContainer">
        <h2>Jeżeli masz jakiekolwiek pytania, pisz śmiało!</h2>
        <p>
          Na wszelkie pytania postaramy się odpowiedzieć tak szybko, jak to
          tylko możliwe.
          <br />
          <br />
          Pamiętaj, że twoje dane będą używane wyłącznie do analizy
          statystycznej, a dane z przeglądarki (nickname), zostaną usunięte po
          zakończeniu eksperymentu (dzień 2).
          <br />
          <br />
        </p>

        <a href="mailto:axcpt.kul@gmail.com">
          <div>&#9993;</div>axcpt.kul@gmail.com
        </a>
      </div>
    </div>
  );
}
