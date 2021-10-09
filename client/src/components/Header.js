import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Button name="Strona główna" styling="btn btn--small btn--white" />
      </Link>
      <Link to="/contact">
        <Button name="Kontakt" styling="btn btn--small btn--white" />
      </Link>
    </header>
  );
};

export default Header;
