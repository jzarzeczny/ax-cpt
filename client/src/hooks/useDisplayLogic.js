import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import images from "../images";
import NoRespAudio from "../assets/audio/Noresp.wav";
import WrongAudio from "../assets/audio/Wrong.wav";
import NoGoErrorAudio from "../assets/audio/NoGoError.wav";

// Variables
// Variants of the test
const AX = "AX";
const AY = "AY";
const BX = "BX";
const BY = "BY";
const noGo = "no-go";
const noAnswer = "no answer";

// Keys used to operate the test
const key1 = "z";
const key2 = "m";

// Content display between sesions
const clueBrake = "+ + +";
const probeBrake = "  +\n+  +";

// Times
const imageDisplayTime = 1000;
const letterDisplayTime = 500;
const clueProbeBreak = 4000;
const probeImageBreak = 1000;
const breakInputTime = 750;

// Support functions

// Sleep for some time
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
// Play the sound during the test
async function playSound(track) {
  const audio = new Audio(track);
  audio.play();
}

function validateResponse(response, data) {
  // Get the response and validate it
  if (response === key1 || response === key2 || response === noAnswer) {
    // Playing sound based on the response.
    if (data.warriety !== noGo && response === noAnswer) {
      playSound(NoRespAudio);
    } else {
      if (data.warriety === noGo && (response === key1 || response === key2)) {
        playSound(NoGoErrorAudio);
      }
      if (
        data.warriety === AX &&
        (response === key1 || response === noAnswer)
      ) {
        playSound(WrongAudio);
      }
      if (
        (data.warriety === AY ||
          data.warriety === BX ||
          data.warriety === BY) &&
        (response === key2 || response === noAnswer)
      ) {
        playSound(WrongAudio);
      }
    }
  }
}

// Function that waits for user response
async function waitForResponse(time) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const waitForAnswer = () =>
      setTimeout(() => {
        resolve([noAnswer, time]);
        clearTimeout(waitForAnswer);
      }, time);
    waitForAnswer();
    document.addEventListener("keydown", (event) => {
      const endTime = Date.now() - startTime;
      if (event.key === key1) {
        document.removeEventListener("keydown", null);
        resolve([key1, endTime]);
      }
      if (event.key === key2) {
        document.removeEventListener("keydown", null);
        resolve([key2, endTime]);
      }
    });
  });
}

// Basic function that display values in each phase of experiment
function displayValues(border, setBorder, value, setValue) {
  setBorder(border);
  setValue(value);
}

//Something to impove later on.

const useDisplayLogic = (data, getData, boxLocationStyling) => {
  const [value, setValue] = useState();
  const [border, setBorder] = useState(false);
  const [colorStyling, setColorStyling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  if (data === null) {
    history.push("/wentwrong");
  }

  useEffect(() => {
    if (isLoading) {
      cacheImages(images);
    } else controlOfDisplay(0);
  }, [isLoading]);

  const cacheImages = async (imagesArray) => {
    const promises = await imagesArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);

    setIsLoading(false);
  };
  async function controlOfDisplay(i) {
    if (i < data.length) {
      // If there is need to display photo
      if (data[i].affectId !== null) {
        const numberValueOfAffectId = parseInt(data[i].affectID) - 1;
        setValue(
          <img
            src={images[numberValueOfAffectId]}
            alt="images of something"
          ></img>
        );
        await sleep(imageDisplayTime);
      }

      // Clue part
      // Clue variables
      let clueReactionDone = false;
      const clueInitialReactionTime = Date.now();
      //Initial display of clue
      displayValues(true, setBorder, data[i].clue, setValue);

      //Waiting for response of user
      const [clueReaction, clueTime] = await waitForResponse(letterDisplayTime);
      // If response happen
      if (clueTime !== letterDisplayTime) {
        // Get reaction time
        const clueEndReactionTime = Date.now();
        // Play sound when key pressed was not key1
        if (clueReaction === key2) {
          playSound(WrongAudio);
        }
        // Save data of response
        data[i].clueResponse = clueReaction;
        data[i].clueResponseTime =
          clueEndReactionTime - clueInitialReactionTime;
        // Make app sleep for rest of time
        await sleep(letterDisplayTime - clueTime);
        // Change flag that input was done by user
        clueReactionDone = true;
      }

      // Show clue - probe break

      //Display probe brake
      displayValues(false, setBorder, clueBrake, setValue);
      // If input was done, go sleep
      if (clueReactionDone) {
        await sleep(clueProbeBreak);
      } else {
        // Wait for response
        const [clueReaction, clueTime] = await waitForResponse(breakInputTime);
        // Get reaction time
        const clueEndReactionTime = Date.now();
        // Validate response and play sound if needed
        validateResponse(clueReaction, data[i]);
        // Save data
        data[i].clueResponse = clueReaction;
        data[i].clueResponseTime =
          clueEndReactionTime - clueInitialReactionTime;
        // Go sleep for rest of time
        await sleep(clueProbeBreak - clueTime);
      }

      // Display probe

      // If the warriety of the experiment is 'reactive', change the place of the box
      if (data[i].reactive) {
        // Box at the top of the screen
        if (data[i].warriety === AX || data[i].warriety === BY) {
          boxLocationStyling({
            alignItems: "flex-start",
          });
        }
        // Box at the bottom of the screen
        if (
          data[i].warriety === AY ||
          data[i].warriety === BX ||
          data[i].warriety === noGo
        ) {
          setColorStyling(true);
          boxLocationStyling({
            alignItems: "flex-end",
          });
        }
      }

      // If warriety is test or proactive, display box with corresponding letter without change of the placement
      displayValues(true, setBorder, data[i].probe, setValue);

      // Get the time value for reaction time mearsurment
      // Proble variables
      let probeReactionDone = false;
      const probeInitialReactionTime = Date.now();

      //Use function to get the response of user
      const [probeReaction, probeTime] = await waitForResponse(
        letterDisplayTime
      );

      if (probeTime !== letterDisplayTime) {
        const probeEndReactionTime = Date.now();
        validateResponse(probeReaction, data[i]);
        data[i].probeResponse = probeReaction;
        data[i].probeResponseTime =
          probeEndReactionTime - probeInitialReactionTime;
        await sleep(letterDisplayTime - probeTime);
        probeReactionDone = true;
      }

      // Probe brake
      displayValues(false, setBorder, probeBrake, setValue);

      setColorStyling(false);
      if (data[i].reactive) {
        boxLocationStyling(null);
      }

      if (probeReactionDone) {
        await sleep(imageDisplayTime);
      } else {
        const [probeReaction, probeTime] = await waitForResponse(
          breakInputTime
        );
        const probeEndReactionTime = Date.now();
        validateResponse(probeReaction, data[i]);
        data[i].probeResponse = probeReaction;
        data[i].probeResponseTime =
          probeEndReactionTime - probeInitialReactionTime;
        await sleep(probeImageBreak - probeTime);
      }

      // Recursion with + 1
      controlOfDisplay(i + 1);

      // Iterated over whole set
    } else {
      // Passing data up
      getData(data);
    }
  }

  return (
    <>
      {isLoading ? (
        <div>Images are loading</div>
      ) : (
        <div
          className={`test__box ${border ? "test__box--border" : null} ${
            colorStyling ? "test__box--color" : null
          }`}
        >
          <p className="letterInBox">{value}</p>
        </div>
      )}
    </>
  );
};

export default useDisplayLogic;
