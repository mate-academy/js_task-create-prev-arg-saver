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
 *
 * @param arg
 */
function createPrevArgSaver(arg) {
  const values = [];
  let count = 0;

  return function(value) {
    const prevValue = values[count - 1];

    values.push(value);
    count++;

    return prevValue;
  };
}

module.exports = createPrevArgSaver;
