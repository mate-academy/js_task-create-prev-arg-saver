'use strict';

/**
 * Write a function (factory) creating a function (device) returning its first
 * argument from previous call. The first call should return undefined
 *
 * For example:
 *
 * const argSaver = createPrevArgSaver()
 * argSaver(123) // return undefined
 * argSaver(456) // return 123
 * argSaver() // return 456
 * argSaver(789) // return undefined
 */
function createPrevArgSaver() {
  createPrevArgSaver.count = -1;

  const prevArguments = [];

  return function(argument) {
    prevArguments.push(argument);
    createPrevArgSaver.count++;

    return createPrevArgSaver.count === 0
      ? undefined
      : prevArguments[createPrevArgSaver.count - 1];
  };
}

module.exports = createPrevArgSaver;
