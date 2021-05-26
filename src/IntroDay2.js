import { Link } from "react-router-dom";

const IntroSecondDay = () => {
  return (
    <div className="paper">
      <div className="container">
        <h3>Witaj "nazwa z ciastek"</h3>
        <p>
          Dzisiejsze zadanie będzie podobne do poprzedniego, jednak będzie
          zaiwerało pewne modyfikację.
        </p>

        <Link to="/instructionsproactive" className="btn" type="button">
          Kontynuuj
        </Link>
      </div>
    </div>
  );
};

export default IntroSecondDay;
