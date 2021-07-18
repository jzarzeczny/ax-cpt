import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainPage">
      <Link to="/metrics" className="mainPage__card">
        <h2>Pierwszy dzień badania</h2>
        <p>
          Wybierz tą opcję, jeżeli jesteś tu po raz pierwszy. Zawartość tej
          sekcji:
        </p>
        <ul>
          <li>Dane do metrycznki</li>
          <li>Wprowadzenie do zasad badania</li>
          <li>Trening</li>
          <li>Pierwsza sesja badania</li>
          <li>Przerwa</li>
          <li>Druga sesja badania</li>
        </ul>
      </Link>
      <Link to="introsd" className="mainPage__card">
        <h2>Drugi dzień badania</h2>
        <p>Wybierz tą opcję, jeżeli to twój drugi raz. Zawartość sekcji:</p>
        <ul>
          <li>Przypomnienie zasad badania</li>
          <li>Trzecia sesja badania</li>
          <li>Przerwa</li>
          <li>Czwarta sesja badania</li>
        </ul>
      </Link>
    </div>
  );
};

export default Main;
