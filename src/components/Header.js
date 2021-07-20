import { Link } from "react-router-dom";
import Button from "./Button";

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
        <Button name={"Strona główna"} styling={"btn--small btn--white"} />
      </Link>
      <p>{doIKnowYou(props.name)}</p>
    </header>
  );
};

export default Header;
