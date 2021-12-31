export const formValidation = (values, listOfUsers) => {
  const errors = {};
  if (!values.nickname) {
    errors.nickname = "To pole jest wymagane";
  } else if (values.nickname.length > 8) {
    errors.nickname = "Wystarczy krótki, maksymalnie 8 znakowy";
  } else if (listOfUsers.includes(values.nickname.toLowerCase())) {
    errors.nickname = "Niestety ten nickname jest zajęty, proszę wybrać inny";
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
  if (!values.illness) {
    errors.illness = "Wybierz jedną z opcji";
  }
  if (!values.medicine) {
    errors.medicine = "Wybierz jedną z opcji";
  }
  return errors;
};
