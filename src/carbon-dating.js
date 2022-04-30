const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (isNaN(sampleActivity) ||
      typeof sampleActivity !== 'string' ||
      !arguments.length ||
      typeof +sampleActivity !== 'number' ||
      +sampleActivity <= 0 ||
      +sampleActivity > 15 ||
      !isFinite(sampleActivity)) {
    return false;
  } else {
    let result = Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD);
    return Math.ceil(result);
  }
}

module.exports = {
  dateSample
};
