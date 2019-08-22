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
  let countedFirstCall = 0;
  let pastValue;

  const savePreviousValue = function(value) {
    return () => value;
  };

  function returnPreviousValue(presentValue) {
    if (countedFirstCall > 0) {
      const previousValue = savePreviousValue(pastValue);
      pastValue = presentValue;

      return previousValue();
    } else {
      pastValue = presentValue;
      countedFirstCall++;
      return arg;
    }
  }

  return returnPreviousValue;
}

module.exports = createPrevArgSaver;
