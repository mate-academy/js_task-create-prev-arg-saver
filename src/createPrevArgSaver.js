'use strict';

function createPrevArgSaver() {
  let previousArg;

  return (arg) => {
    const currentArg = previousArg;

    previousArg = arg;

    return currentArg;
  };
}

module.exports = createPrevArgSaver;
