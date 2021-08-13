import Button from "../components/Button";
import { Link } from "react-router-dom";

const My404 = () => {
  return (
    <div className="container errorPage">
      <h1>Coś poszło nie tak.</h1>
      <Link to="/">
        <Button
          type="button"
          name="Strona główna
        "
        />
      </Link>
    </div>
  );
};

export default My404;
