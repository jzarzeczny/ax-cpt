import useDisplayLogic from "../useDisplayLogic";

const DisplayTest = ({ getData, sequence, setHorizontStyling }) => {
  const data = sequence;
  const value = useDisplayLogic(data, getData, setHorizontStyling);

  return <>{value}</>;
};

export default DisplayTest;
