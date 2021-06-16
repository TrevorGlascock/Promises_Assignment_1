const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  return tell(question)
    .then((fortune) => [
      `Your question was: ${question}`,
      `Your fortune is: ${fortune}`,
    ])
    .catch((error) => `There was an error: ${error}`);
}

function fullSession(question) {
  //Empty accumulator
  let result = [];
  return welcome().then((message) => {
    //push welcome's message
    result.push(message);
    //now we need to getFortune
    return getFortune(question).then((returnValue) => {
      //we use concat to avoid embedding an array
      result = result.concat(returnValue);
      //now we need goodbye
      return goodbye().then((message) => {
        //push goodbye's message
        result.push(message);
        //russian doll return result which will be returned all the way to the top
        return result;
      });
    });
  });
}

module.exports = { getFortune, fullSession };
