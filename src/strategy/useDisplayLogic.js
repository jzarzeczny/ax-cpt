import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function waitForClue() {
  return new Promise((resolve) => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "a") {
        resolve(true);
      }
    });
  });
}

async function waitForResponse() {
  return new Promise((resolve) => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "a") {
        resolve("A");
      } else if (event.key === "l") {
        resolve("L");
      }
    });
  });
}

const useDisplayLogic = (data, route) => {
  const [value, setValue] = useState();
  const history = useHistory();

  useEffect(() => {
    async function controlOfDisplay(i) {
      const reaction = {};

      if (i < data.length) {
        //Initial display of clue
        setValue(data[i].clue);
        //Waiting for response of user
        const clueSeen = await waitForClue();
        //Response came
        if (clueSeen) {
          //Display the wait-for-probe template
          setValue("+ + +");
          //Display for 3s
          await sleep(3000);
        }
        //3s passed, display of probe
        setValue(data[i].probe);
        // Start the measure of reaction time
        reaction.start = Date.now();
        //Waiting for response of participant
        const response = await waitForResponse();
        //Response happen ether Button1 or Button2
        if (response === "A" || response === "L") {
          // End of the measure of reaction time
          reaction.end = Date.now();
          // Saving the data about reaction time
          data[i].reactionTime = reaction.end - reaction.start + "ms";
          // Saving response data

          data[i].response = response;
          // Waiting for new set for 3s
          setValue("  +\n+  +");
          await sleep(3000);

          // Recursion with + 1
          controlOfDisplay(i + 1);
        }
        // Iterated over whole set
      } else {
        console.log(JSON.stringify(data, null, 2));
        history.push(route);
      }
    }

    controlOfDisplay(0);
  }, []);

  return value;
};

export default useDisplayLogic;
