import data from "../../data/tutorial";
import useDisplayLogic from "../useDisplayLogic";

const Trening = () => {
  const route = "/instructionsproactive";

  const value = useDisplayLogic(data, route);

  return (
    <div className="box">
      <p className="letterInBox">{value}</p>
    </div>
  );
};

export default Trening;
