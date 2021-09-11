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
const imageDisplayTime = 3000;
const letterDisplayTime = 1000;

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

// Function that waits for user response
async function waitForResponse() {
  return new Promise((resolve) => {
    const waitForAnswer = () =>
      setTimeout(() => {
        resolve(noAnswer);
        clearTimeout(waitForAnswer);
      }, letterDisplayTime);
    waitForAnswer();
    document.addEventListener("keydown", (event) => {
      if (event.key === key1) {
        resolve(key1);
      }
      if (event.key === key2) {
        resolve(key2);
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
    const reaction = {};
    if (i < data.length) {
      // If there is need to display photo
      if (data[i].affectId !== null) {
        setValue(
          <img src={images[data[i].affectId]} alt="images of something"></img>
        );
        await sleep(imageDisplayTime);
      }

      //Initial display of clue
      displayValues(true, setBorder, data[i].clue, setValue);

      //Waiting for response of user
      const clueSeen = await waitForResponse();

      //Reaction on the reponse
      if (clueSeen) {
        // Play sound if no reaction to clue
        if (clueSeen === noAnswer) {
          playSound(NoRespAudio);
        }
        if (clueSeen === key2) {
          playSound(WrongAudio);
        }
        // Save the data about the clue
        data[i].clueResponse = clueSeen;

        //Display probe brake
        displayValues(false, setBorder, clueBrake, setValue);

        await sleep(imageDisplayTime);
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
      reaction.start = Date.now();

      //Use function to get the response of user
      const response = await waitForResponse();

      // Get the response and validate it
      if (response === key1 || response === key2 || response === noAnswer) {
        // Playing sound based on the response.
        if (data[i].warriety !== noGo && response === noAnswer) {
          playSound(NoRespAudio);
        } else {
          if (
            data[i].warriety === noGo &&
            (response === key1 || response === key2)
          ) {
            playSound(NoGoErrorAudio);
          }
          if (
            data[i].warriety === AX &&
            (response === key1 || response === noAnswer)
          ) {
            playSound(WrongAudio);
          }
          if (
            (data[i].warriety === AY ||
              data[i].warriety === BX ||
              data[i].warriety === BY) &&
            (response === key2 || response === noAnswer)
          ) {
            playSound(WrongAudio);
          }
        }

        // End of the measure of reaction time
        reaction.end = Date.now();

        // Saving the data about reaction time
        data[i].reactionTime = reaction.end - reaction.start + "ms";

        // Saving response data
        data[i].probeResponse = response;

        // Probe brake
        displayValues(false, setBorder, probeBrake, setValue);

        setColorStyling(false);
        if (data[i].reactive) {
          boxLocationStyling(null);
        }

        // setValue(probeBrake);
        await sleep(imageDisplayTime);

        // Recursion with + 1
        controlOfDisplay(i + 1);
      }
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
