const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for (let i = 0; i < s2.length; i++) { //s2 статичен, проходимся через него
    if (s1.includes(s2[i])) {
      count++;
      s1 = s1.replace(s2[i], ''); 
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
