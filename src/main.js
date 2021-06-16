const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  /*return tell(question)
    .then((fortune) => [
      `Your question was: ${question}`,
      `Your fortune is: ${fortune}`,
    ])
    .catch((error) => `There was an error: ${error}`);
    */
}

function fullSession(question) {
  /*
  const result = [];
  welcome().then((message) => {
    return result.push(message);
  });
  getFortune(question).then((returnValue) => {
    result.concat(returnValue);
  });
  goodbye().then((message) => {
    console.log(result);
    return result.push(message);
  });
  return result;
  /**/
}

module.exports = { getFortune, fullSession };
