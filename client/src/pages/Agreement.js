import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NicknameContext } from "../nicknameContext";

const Instructions = () => {
  const [agreement, setAgreement] = useState(false);
  const { nickname } = useContext(NicknameContext);
  let history = useHistory();
  function handleClick(e) {
    e.preventDefault();
    if (!agreement) {
      return;
    } else if (agreement) {
      const change = {
        agreement: true,
      };
      localStorage.setItem("nickname", nickname);
      axios
        .post("http://localhost:5000/update/" + nickname.nickname, change)
        .then((res) => console.log(res.data))
        .then(history.push("/tutorial"));
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

        <Button
          styling="agreement__button"
          type="button"
          name="Przejdz do kwestionaiusza"
          func={handleClick}
        />
      </div>
    </div>
  );
};

export default Instructions;
