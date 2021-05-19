import { Link } from "react-router-dom";
import { useState } from "react";

const Instructions = () => {
  const [agreement, setAgreement] = useState(false);

  function handleClick(e) {
    console.log(agreement);
    if (!agreement) {
      e.preventDefault();
    } else if (agreement) {
      return;
    }
  }

  return (
    <div className="instructions">
      <h2>Instrukcja</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        aliquid cupiditate optio deserunt provident quos officiis a ipsum, eius
        id ea odio! Dolores ratione aspernatur, illo nam aperiam doloribus
        voluptates.
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
      <div className="buttonWrapper">
        <Link
          to="/tutorial"
          onClick={handleClick}
          className="btn"
          type="button"
        >
          Przejdź do kwestionariusza
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
