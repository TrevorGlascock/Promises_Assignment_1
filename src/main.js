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
  return welcome()
    .then((message) => {
      session.push(message);
      return message;
    })
    .then(getFortune(question))
    .then((message) => {
      session.push(message);
    })
    .then(goodbye)
    .then((message) => {
      session.push(message);
    });

  return session;
}

module.exports = { getFortune, fullSession };
