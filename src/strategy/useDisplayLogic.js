import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import images from "../images";

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function waitForClue() {
  return new Promise((resolve) => {
    const waitForAnswer = () =>
      setTimeout(() => {
        resolve("no answer");
        clearTimeout(waitForAnswer);
      }, 1000);
    waitForAnswer();
    document.addEventListener("keydown", (event) => {
      if (event.key === "a") {
        resolve(true);
      }
    });
  });
}

async function waitForResponse() {
  return new Promise((resolve) => {
    const waitForAnswer = () =>
      setTimeout(() => {
        resolve("no answer");
        clearTimeout(waitForAnswer);
      }, 1000);
    waitForAnswer();
    document.addEventListener("keydown", (event) => {
      if (event.key === "a") {
        resolve("A");
      }
      if (event.key === "l") {
        resolve("L");
      }
    });
  });
}

//Something to impove later on.
const values = Object.values(images);

const useDisplayLogic = (data, getData) => {
  const [value, setValue] = useState();
  const [border, setBorder] = useState(false);
  const history = useHistory();
  if (data === null) {
    history.push("/wentwrong");
  }

  useEffect(() => {
    async function controlOfDisplay(i) {
      const reaction = {};

      if (i < data.length) {
        if (data[i].affectId !== null) {
          setValue(
            <img src={values[data[i].affectId]} alt="images of something"></img>
          );
          await sleep(3000);
        }
        //Initial display of clue
        setBorder(true);
        setValue(data[i].clue);
        //Waiting for response of user
        const clueSeen = await waitForClue();
        //Response came
        if (clueSeen) {
          data[i].clueReaction = clueSeen;
          //Display the wait-for-probe template without the border
          setBorder(false);
          setValue("+ + +");
          //Display for 3s
          await sleep(3000);
        }
        //3s passed, display of probe
        setBorder(true);
        setValue(data[i].probe);
        // Start the measure of reaction time
        reaction.start = Date.now();
        //Waiting for response of participant
        const response = await waitForResponse();
        //Response happen ether Button1 or Button2
        if (response === "A" || response === "L" || response === "no answer") {
          // End of the measure of reaction time
          reaction.end = Date.now();
          // Saving the data about reaction time
          data[i].reactionTime = reaction.end - reaction.start + "ms";
          // Saving response data

          data[i].probeResponse = response;
          // Waiting for new set for 3s
          setBorder(false);
          setValue("  +\n+  +");
          await sleep(3000);

          // Recursion with + 1
          controlOfDisplay(i + 1);
        }
        // Iterated over whole set
      } else {
        // console.log(JSON.stringify(data, null, 2));
        getData(data);
      }
    }

    controlOfDisplay(0);
  }, []);

  return (
    <div className={`box ${border ? "border" : ""}`}>
      <p className="letterInBox">{value}</p>
    </div>
  );
};

export default useDisplayLogic;
