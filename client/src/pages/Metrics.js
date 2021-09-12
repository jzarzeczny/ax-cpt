import React, { useState, useReducer, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import axios from "axios";
import { NicknameContext } from "../nicknameContext";
import { validate } from "../hooks/validate";
import metric from "../images/styling/metric.svg";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};
const Metrics = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [errors, setErrors] = useState({});
  const [listOfUsers, setListOfUsers] = useState([]);
  const { setNickname } = useContext(NicknameContext);
  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/record")
      .then((res) =>
        res.data.map((el) => {
          return el.nickname.toLowerCase();
        })
      )
      .then((result) => {
        setListOfUsers(result);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = validate(formData, listOfUsers);
    setErrors(errorList);
    if (Object.keys(errorList).length === 0) {
      setNickname(() => formData.nickname);
      const newperson = {
        nickname: formData.nickname.toLowerCase(),
        age: formData.age,
        gender: formData.gender,
        education: formData.education,
        location: formData.location,
      };
      axios
        .post("http://localhost:5000/record/add", newperson)
        .then((res) => {});
      history.push("/agreement");
    }
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Layout>
      <div
        className="container__form 
       container--basic "
      >
        <h1>Metryczka</h1>
        <p>
          Poniżej znajduje się metryczka, pomoże ona w analizie wyników. Twoje
          dane nie zostaną nikomu udostępnione. Proszę, wypełnij ankietę zgodnie
          z prawdą. 
        </p>
        <form onSubmit={handleSubmit} data-testid="formElement">
          <label className="label__nickname" htmlFor="nickname">
            Nick
            <span>(potrzebny do identyfikacji drugiego dnia)</span>
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            onChange={handleChange}
            value={formData.nickname || ""}
          />
          {errors.nickname ? (
            <div className="form__error" data-testid="nicknameError">
              {errors.nickname}
            </div>
          ) : null}

          <label htmlFor="age">Wiek</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age || ""}
          />

          {errors.age ? <div className="form__error">{errors.age}</div> : null}

          <label htmlFor="gender">Płeć</label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            value={formData.gender || ""}
          >
            <option value="">Wybierz</option>
            <option value="m">Mężczyzna</option>
            <option value="f">Kobieta</option>
          </select>

          {errors.gender ? (
            <div className="form__error">{errors.gender}</div>
          ) : null}

          <label htmlFor="education">Wykształcenie:</label>
          <select
            id="eduction"
            name="education"
            onChange={handleChange}
            value={formData.education || ""}
          >
            <option value="">Wybierz</option>
            <option value="podstawowe">Podstawowe</option>
            <option value="średnie">Średnie</option>
            <option value="wyższe">Wyższe</option>
            <option value="zawodowe">Zawodowe</option>
          </select>

          {errors.education ? (
            <div className="form__error">{errors.education}</div>
          ) : null}

          <label htmlFor="location">Miejsce zamieszkania</label>
          <select id="location" name="location" onChange={handleChange}>
            <option value="">Wybierz</option>
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

          {errors.location ? (
            <div className="form__error">{errors.location}</div>
          ) : null}
          <img src={metric} alt="Metric" className="form__img" />

          <Button styling="btn--standard" name="Zapisz" type="submit" />
        </form>
      </div>
    </Layout>
  );
};

export default Metrics;

// Context to save nickname data
