import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LookForNick from "../components/LookForNick";

export default function Login() {
  const [nickname, setNickname] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
  }, []);

  const whereIsYourNickname = () => {
    setNotFound(true);
  };
  console.log(nickname);
  return (
    <div className="container">
      <div className="loginContainer">
        <h2>WItaj drugiego dnia eksperymentu!</h2>
        <p>
          W celu ułatwienia badania, poniżej powinieneś zobaczyć nick, który
          wybrałeś wczoraj.
        </p>
        <h3>{nickname}</h3>
        <p>Czy to jest nick, który wczoraj wybrałeś?</p>
        <div className="login__buttonContainer">
          <Button
            name="Nie zgadza się"
            styling="btn--false"
            func={whereIsYourNickname}
          />

          <Link
            to={{
              pathname: "/experiment",
              state: { type: "proactive" },
            }}
          >
            <Button type="button" styling="btn--true" name="Zacznij zadanie" />
          </Link>
        </div>
        {notFound && (
          <LookForNick setNickname={setNickname} setNotFound={setNotFound} />
        )}
      </div>
    </div>
  );
}
