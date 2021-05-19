import { Link } from "react-router-dom";

const Header = (props) => {
  function doIKnowYou(name) {
    if (name === null) {
      return "Nie jesteś zalogowany";
    } else {
      return "Witaj " + name;
    }
  }

  return (
    <header>
      <Link to="/">
        <button className="homePageButton">Strona główna</button>
      </Link>
      <p>{doIKnowYou(props.name)}</p>
    </header>
  );
};

export default Header;
