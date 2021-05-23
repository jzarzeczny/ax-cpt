import { useEffect } from "react";
import { useHistory } from "react-router";

const MiddleProactive = () => {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push({
        pathname: "/displayproactive",
        trail: 2,
      });
    }, 60000);
  });

  return (
    <div className="paper">
      <div className="container">
        <h3>Gratuluje, właśnie ukończyłeś pierwszą część testu.</h3>

        <p>Odpocznij minutę, rozluźnij się.</p>

        <h3>Kolejna część zacznie się za 60s.</h3>
      </div>
    </div>
  );
};

export default MiddleProactive;
