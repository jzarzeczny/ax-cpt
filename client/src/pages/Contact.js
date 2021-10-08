import Header from "../components/Header";
import Layout from "../components/Layout";
import React from "react";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <div className="container__contact container--small">
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
    </Layout>
  );
}
