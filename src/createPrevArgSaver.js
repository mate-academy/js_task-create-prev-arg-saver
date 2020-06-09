/* eslint-disable no-console */
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
  // write code here
  const memory = [];

  return function returner(newElem) {
    const before = memory[0];

    memory.unshift(newElem);

    return before;
  };
}

const argSaver = createPrevArgSaver();

console.log(argSaver(1));
console.log(argSaver(100));
console.log(argSaver(1123));
module.exports = createPrevArgSaver;
