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
function createPrevArgSaver() {
  const factory = function() {
    const previousValue = [];

    const device = function(arg) {
      previousValue.push(arg);
      return previousValue[previousValue.length - 2];
    };

    return device;
  };

  const deviceOne = factory();

  return deviceOne;
}

module.exports = createPrevArgSaver;

// const factory = function(arg) {
//   const previousValue = [];

//   const device = function(arg) {
//     previousValue.push(arg);
//     return previousValue[previousValue.length - 2];
//   };

//   return device;
// }

// const deviceOne = factory();

// console.log(deviceOne(1));

// console.log(deviceOne(2));

// console.log(deviceOne(3));
