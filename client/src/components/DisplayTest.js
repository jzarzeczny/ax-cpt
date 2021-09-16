import useDisplayLogic from "../hooks/useDisplayLogic";
import testData from "../data/index";

const DisplayTest = ({ type, sequence = "", getData, setHorizontStyling }) => {
  const variation = sequence + type.replace(/\b\w/g, (l) => l.toUpperCase());
  const dataToDisplay = testData[variation];

  const value = useDisplayLogic(dataToDisplay, getData, setHorizontStyling);

  return <>{value}</>;
};

export default DisplayTest;
