import data from "../../data/proactive";
import useDisplayLogic from "../useDisplayLogic";

const DisplayProactive = () => {
  const route = "/instructionsproactive";

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
