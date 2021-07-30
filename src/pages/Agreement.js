import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Button from "../components/Button";
import Airtable from "airtable";
import { UserContext } from "../context";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE }).base(
  "app4JXWQeK5gxV5jO"
);

const Instructions = () => {
  const [agreement, setAgreement] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user);

  function handleClick(e) {
    console.log(agreement);
    if (!agreement) {
      e.preventDefault();
    } else if (agreement) {
      base("Metrics").update(
        [
          {
            id: user,
            fields: {
              agreement: String(agreement),
            },
          },
        ],
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
      return;
    }
  }

  return (
    <div className="container">
      <div className="agreementContainer">
        <h2>Instrukcja</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          aliquid cupiditate optio deserunt provident quos officiis a ipsum,
          eius id ea odio! Dolores ratione aspernatur, illo nam aperiam
          doloribus voluptates.
        </p>
        <h2 className="key-info">Informacje zbierane</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex
          consequatur obcaecati vel dolorem ipsam, nemo illo, perferendis velit
          facere quos exercitationem odio, iure sint repellendus suscipit quia
          ratione voluptatibus.
        </p>
        <form action="#">
          <div className="agree">
            <label htmlFor="agreement">Wyrażam zgodę na badanie:</label>
            <input
              defaultValue={agreement}
              type="checkbox"
              onChange={() => setAgreement(!agreement)}
              id="agreement"
              name="agreement"
            ></input>
          </div>
        </form>

        <Link className="buttonContainer" to="/tutorial" onClick={handleClick}>
          <Button
            type="button"
            name="Przejdz do kwestionaiusza"
            to="/tutorial"
            onClick={handleClick}
          />
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
