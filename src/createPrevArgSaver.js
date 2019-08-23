'use strict';

function createPrevArgSaver(arg) {
  let firstArg = arg;

  return function(number) {
    const secondArg = firstArg;
    firstArg = number;

    return secondArg;
  };
}

module.exports = createPrevArgSaver;
