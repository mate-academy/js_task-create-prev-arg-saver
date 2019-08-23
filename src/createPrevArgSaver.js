'use strict';

function createPrevArgSaver(arg) {
  let nowArg = arg;

  return function(number) {
    const previousArg = nowArg;
    nowArg = number;

    return previousArg;
  };
}

module.exports = createPrevArgSaver;
