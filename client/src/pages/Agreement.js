import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import axios from "axios";
import { NicknameContext } from "../nicknameContext";
import { API_HOST } from "../utils/constants";

const Instructions = () => {
  const [agreement, setAgreement] = useState(false);
  const [failed, setFailed] = useState(false);

  const { nickname } = useContext(NicknameContext);
  console.log(nickname);
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    if (!agreement) {
      setFailed(true);
      return;
    } else if (agreement) {
      localStorage.setItem("nickname", nickname.toLowerCase());
      const change = {
        agreement: true,
      };
      axios
        .post(API_HOST + "/update/" + nickname.toLowerCase(), change)
        .then((res) => console.log(res.data))
        .then(history.push("/tutorial"));
    }
  }

  return (
    <Layout>
      <div className="container__agreement container--basic ">
        <h2>Instrukcja</h2>
        <p>
          Badanie polega na reakcji na wyświetlane treści. Dokładne instrukcje
          zostaną podane na kolejne stronie.
        </p>
        <p>
          Kluczowe jest przejście procedury zarówno dnia pierwszegom, jak
          również dnia drugiego. Tylko w takim wypadku dane mogą zostać poddane
          analizie.
        </p>
        <h2 className="key-info">Informacje zbierane</h2>
        <p>
          Oprócz danych metrycznych zebranych na poprzedniej stronie, dane
          dotyczące Twoich odpowiedzi, zostaną przesłane do serwera.
        </p>
        <p>
          Powyższe informajce zostaną użyte tylko do analizy statystycznej
          wyników.
        </p>
        <p>
          Finalnie, Twoja przeglądarka będzie przechowywała dane lokalnie
          (nickname) do identyfikacji dnia drugiego. Zostaną one wymazne pod
          koniec dnia drugiego.
        </p>

        <label htmlFor="agreement" className="agreement__label">
          Wyrażam zgodę na badanie:
          <input
            defaultValue={agreement}
            type="checkbox"
            onChange={() => setAgreement(!agreement)}
            id="agreement"
            name="agreement"
            className="agreement__input"
          ></input>
          <span
            className={`agreement__checkbox ${
              failed && "agreement__checkbox--fail"
            }`}
          ></span>
        </label>

        <Button
          styling="btn--standard"
          type="button"
          name="Przejdz do badania"
          func={handleClick}
        />
      </div>
    </Layout>
  );
};

export default Instructions;
