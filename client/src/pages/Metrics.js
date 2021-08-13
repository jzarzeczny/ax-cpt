import React, { useState, useReducer, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { NicknameContext } from "../nicknameContext";
const validate = (values) => {
  const errors = {};
  if (!values.nickname) {
    errors.nickname = "To pole jest wymagane";
  } else if (values.nickname.length > 8) {
    errors.nickname = "Wystarczy krótki, maksymalnie 8 znakowy";
  }

  if (!values.age) {
    errors.age = "To pole jest wymagane";
  }
  if (parseInt(values.age) < 18 || parseInt(values.age) >= 100) {
    errors.age = "Musisz mieć między 18, a 100 lat";
  }

  if (!values.gender) {
    errors.gender = "Musisz wybrać płeć";
  }
  if (!values.education) {
    errors.education = "Musisz wybrać poziom edukacji";
  }
  if (!values.location) {
    errors.location = "Musisz wybrać miejsce zamieszkania";
  }
  return errors;
};
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Metrics = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useReducer(formReducer, {});
  const [nickname, setNickname] = useContext(NicknameContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      setErrors(validate(formData));
    } else if (Object.keys(formData).length === 5) {
      setErrors(validate(formData));
      console.log(errors);
      if (JSON.stringify(errors) === "{}") {
        setNickname((state) => ({ ...state, nickname: formData.nickname }));
        const newperson = {
          nickname: formData.nickname,
          age: formData.age,
          gender: formData.gender,
          education: formData.education,
          location: formData.location,
        };
        axios
          .post("http://localhost:5000/record/add", newperson)
          .then((res) => {
            console.log(res.data);
          });
        history.push("/agreement");
      } else {
        setErrors(validate(formData));
      }
    }
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h1>Metryczka</h1>
        <p>
          Poniżej znajduje się metryczka, pomoże ona w analizie wyników. Twoje
          dane nie zostaną nikomu udostępnione. Proszę, wypełnij ankietę zgodnie
          z prawdą. 
        </p>
        <form onSubmit={handleSubmit} data-testid="formElement">
          <label>
            Nick:
            <input
              type="text"
              name="nickname"
              onChange={handleChange}
              value={formData.nickname || ""}
            />
            <br />
            (potrzebny do identyfikacji drugiego dnia)
          </label>
          {errors.nickname ? (
            <div className="error" data-testid="nicknameError">
              {errors.nickname}
            </div>
          ) : null}

          <label>
            Wiek:
            <input
              type="number"
              name="age"
              onChange={handleChange}
              value={formData.age || ""}
            />
          </label>
          {errors.age ? <div className="error">{errors.age}</div> : null}

          <label>
            Płeć:
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender || ""}
            >
              <option value="">Proszę wybrać płeć</option>
              <option value="m">Mężczyzna</option>
              <option value="f">Kobieta</option>
            </select>
          </label>
          {errors.gender ? <div className="error">{errors.gender}</div> : null}

          <label>
            Wykształcenie:
            <select
              name="education"
              onChange={handleChange}
              value={formData.education || ""}
            >
              <option value="">Proszę wybrać wykształcenie</option>
              <option value="podstawowe">Podstawowe</option>
              <option value="średnie">Średnie</option>
              <option value="wyższe">Wyższe</option>
              <option value="zawodowe">Zawodowe</option>
            </select>
          </label>
          {errors.education ? (
            <div className="error">{errors.education}</div>
          ) : null}

          <label>
            Miejsce zamieszkania:
            <select name="location" onChange={handleChange}>
              <option value="">Proszę wybrać miejsce zamieszkania</option>
              <option value="wies">Wieś</option>
              <option value="malemiasto">Miasto do 50tyś mieszkańców</option>
              <option value="sredniemiasto">
                Miasto od 50tyś mieszkańców do 150tyś mieszkańców
              </option>
              <option value="duzemiasto">
                Miasto od 150tyś mieszkańców do 250tyś mieszkańców
              </option>
              <option value="metropolia">
                Miasto powyżej 250tyś miekszańców
              </option>
            </select>
          </label>
          {errors.location ? (
            <div className="error">{errors.location}</div>
          ) : null}

          <Button name="Zapisz" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Metrics;

// Context to save nickname data
