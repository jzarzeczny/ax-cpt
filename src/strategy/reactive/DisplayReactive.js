import { useLocation } from "react-router";
import lowApproachData from "../../data/lowApproachProactive";
import highApproachData from "../../data/highApproachhProactive";

import useDisplayLogic from "../useDisplayLogic";

const DisplayReactive = () => {
  const location = useLocation();

  let data = null;
  let route = null;

  function determineRoute(trail) {
    if (trail === 1) {
      data = lowApproachData;
      route = "/middlep";
    } else if (trail === 2) {
      data = highApproachData;
      route = "/endp";
    }
  }

  determineRoute(location.trail);
  const value = useDisplayLogic(data, route);

  return (
    <div className="paper">
      <div className="box">
        <p className="letterInBox">{value}</p>
      </div>
    </div>
  );
};

export default DisplayReactive;
