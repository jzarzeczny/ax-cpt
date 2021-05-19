import { useEffect, useState } from "react";

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

const useDisplayLogic = (data) => {
  const [value, setValue] = useState();

  useEffect(() => {
    async function controlOfDisplay(i) {
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
        //Waiting for response of participant
        const response = await waitForResponse();
        //Response happen eather Button1 or Button2
        if (response === "A" || response === "L") {
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
        alert(JSON.stringify(data, null, 2));
      }
    }

    controlOfDisplay(0);
  }, []);

  return value;
};

export default useDisplayLogic;
