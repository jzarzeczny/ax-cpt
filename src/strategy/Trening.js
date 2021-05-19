import data from "../data/tutorial";
import useDisplayLogic from "./useDisplayLogic";

console.log(data[0]);

const Trening = () => {
  const value = useDisplayLogic(data);

  return (
    <div className="box">
      <p className="letterInBox">{value}</p>
    </div>
  );
};

export default Trening;
