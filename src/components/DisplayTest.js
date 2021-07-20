import useDisplayLogic from "../strategy/useDisplayLogic";

const DisplayTest = ({ getData, sequence }) => {
  const data = sequence;
  const value = useDisplayLogic(data, getData);

  return <>{value}</>;
};

export default DisplayTest;
