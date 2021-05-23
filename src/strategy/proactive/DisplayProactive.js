import data from "../../data/proactive";
import useDisplayLogic from "../useDisplayLogic";

const DisplayProactive = (props) => {
  const route = "/middlep";

  console.log(props.trail);
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
