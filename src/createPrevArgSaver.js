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
  let previous;

  return function argSave(current) {
    const argument = previous;

    previous = current;

    return argument;
  };
}

module.exports = createPrevArgSaver;

// const argSaver = createPrevArgSaver();

// console.log(argSaver(123));

// console.log(argSaver(456));

// console.log(argSaver());

// console.log(argSaver(789));
