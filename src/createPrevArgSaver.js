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
  const arraOFPreValues = [];

  function argSaver(newArs) {
    arraOFPreValues.push(newArs);
    let result;

    for (let i = 0; i < arraOFPreValues.length; i++) {
      result = arraOFPreValues[i - 1];
    }

    return result;
  }

  return argSaver;
}

module.exports = createPrevArgSaver;
