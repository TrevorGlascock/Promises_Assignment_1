const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  const result = tell(question)
    .then((fortune) => [
      `Your question was: ${question}`,
      `Your fortune is: ${fortune}`,
    ])
    .catch((error) => `There was an error: ${error}`);

  return result;
}

function fullSession(question) {
  let result = [];
  return welcome().then((message) => {
    result.push(message);
    return getFortune(question).then((returnValue) => {
      result = result.concat(returnValue);
      return goodbye().then((message) => {
        result.push(message);
        return result;
      });
    });
  });
}

module.exports = { getFortune, fullSession };
