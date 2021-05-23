import { useLocation } from "react-router";
import data from "../../data/proactive";
import useDisplayLogic from "../useDisplayLogic";

const DisplayProactive = () => {
  const location = useLocation();

  const route = () => {
    if (location.trail === 1) return "/middlep";
    else if (location.trail === 2) return "/endp";
  };

  const value = useDisplayLogic(data, route);

  return (
    <div className="paper">
      <div className="box">
        <p className="letterInBox">{value}</p>
      </div>
    </div>
  );
};

export default DisplayProactive;
