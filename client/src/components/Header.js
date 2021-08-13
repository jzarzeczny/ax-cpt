import { Link } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {
  return (
    <header>
      <Link to="/contact">
        <Button name="Kontakt" styling={"btn btn--small btn--white"} />
      </Link>
    </header>
  );
};

export default Header;
