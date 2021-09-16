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

const dataValidation = (data) => {
  let validatedData = [];
  data.forEach((iteration) => {
    let object = {
      id: iteration.id,
      warriery: iteration.warriety,
      clueResponse: iteration.clueResponse,
      probeResponse: iteration.probeResponse,
    };
    if (iteration.clueResponse === key1) {
      if (
        iteration.warriety === AX &&
        iteration.clueResponse &&
        iteration.probeResponse === key2
      ) {
        object.correct = true;
        validatedData.push(object);
      }
      if (
        iteration.warriety === AY &&
        iteration.clueResponse &&
        iteration.probeResponse === key1
      ) {
        object.correct = true;
        validatedData.push(object);
      }
      if (
        iteration.warriety === BX &&
        iteration.clueResponse &&
        iteration.probeResponse === key1
      ) {
        object.correct = true;
        validatedData.push(object);
      }
      if (
        iteration.warriety === BY &&
        iteration.clueResponse &&
        iteration.probeResponse === key1
      ) {
        object.correct = true;
        validatedData.push(object);
      }
      if (
        iteration.warriety === noGo &&
        iteration.clueResponse &&
        iteration.probeResponse === noAnswer
      ) {
        object.correct = true;
        validatedData.push(object);
      }
    }
  });
  return validatedData;
};

export default dataValidation;
