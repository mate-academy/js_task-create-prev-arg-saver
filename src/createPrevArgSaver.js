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
function createPrevArgSaver(number) {
  let value = number;

  return function(item) {
    const prevValue = value;

    value = item;

    return prevValue;
  };
}

module.exports = createPrevArgSaver;
