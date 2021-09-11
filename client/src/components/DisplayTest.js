import useDisplayLogic from "../hooks/useDisplayLogic";

const DisplayTest = ({ getData, sequence, setHorizontStyling }) => {
  const value = useDisplayLogic(sequence, getData, setHorizontStyling);

  return <>{value}</>;
};

export default DisplayTest;
