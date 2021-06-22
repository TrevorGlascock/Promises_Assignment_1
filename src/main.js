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
  let session = [];
  return welcome()
    .then((message) => {
      session.push(message);
      return question;
    })
    .then(getFortune)
    .then((fortune) => (session = session.concat(fortune)))
    .then(goodbye)
    .then((message) => session.push(message))
    .then(() => session)
    .catch((error) => `There was an error: ${error}`);
}

module.exports = { getFortune, fullSession };
