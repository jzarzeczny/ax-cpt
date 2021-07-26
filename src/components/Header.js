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
      <Link to="/contact">
        <Button name="Kontakt" styling={"btn btn--small btn--white"} />
      </Link>
    </header>
  );
};

export default Header;
