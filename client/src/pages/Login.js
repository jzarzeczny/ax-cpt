import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import LookForNick from "../components/LookForNick";

export default function Login() {
  const [nickname, setNickname] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
  }, []);
  let history = useHistory();
  const letsrole = () => {
    history.push("/proactive");
  };
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

          <Button name="Zgadza się" styling="btn--true" func={letsrole} />
        </div>
        {notFound && (
          <LookForNick setNickname={setNickname} setNotFound={setNotFound} />
        )}
      </div>
    </div>
  );
}
