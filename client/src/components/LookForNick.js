import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_HOST } from "../utils/constants";
import Button from "./Button";

export default function LookForNick({ setNickname, setNotFound }) {
  const [value, setValue] = useState(null);
  const [notRecord, setNotRecord] = useState(false);
  const nicknameInput = useRef(null);

  useEffect(() => {
    if (value && value.data !== null) {
      setNickname(value.data.nickname);
      localStorage.setItem("nickname", value.data.nickname);
      setNotFound(false);
      setNotRecord(false);
    }
    if (value && value.data === null) {
      setNotRecord(true);
    }
  }, [setNickname, value]);

  const searchForNickname = (e) => {
    e.preventDefault();
    const inputValue = nicknameInput.current.value;
    axios
      .get(API_HOST + "/record/" + inputValue)
      .then((response) => {
        setValue(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className="login__form">
      <label htmlFor="name">Wpisz swój nickname</label>
      <input type="text" name="name" id="name" ref={nicknameInput} />
      <Button type="submit" name="Znajdź" func={searchForNickname} />
      {notRecord && (
        <p>Niestety, nie znalałem takiego nicku, spróbuj jeszcze raz.</p>
      )}
    </form>
  );
}
