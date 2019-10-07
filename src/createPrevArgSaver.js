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
  let value = arg;
  function argumentReturn(prevArg) {
    const prev = value;
    value = prevArg;

    return prev;
  }

  return argumentReturn;
}

module.exports = createPrevArgSaver;
