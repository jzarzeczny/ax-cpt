import useDisplayLogic from "../strategy/useDisplayLogic";

const DisplayTest = ({ route, sequence }) => {
  const data = sequence;
  const value = useDisplayLogic(data, route);

  return <>{value}</>;
};

export default DisplayTest;
