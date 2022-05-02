const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  let reversedArr = domains.map((item) => item.split(".").reverse()); 
  // reversedArr = [[ 'ru', 'yandex', 'code' ],[ 'ru', 'yandex', 'music' ],[ 'ru', 'yandex' ]]
  for (let i = 0; i < reversedArr.length; i++) {
    let dns = '';
    for(let j = 0; j < reversedArr[i].length; j++) {
      dns += '.' + reversedArr[i][j];
      if (result[dns] = result[dns]) { //если такое значение ключа уже есть, то счетчик++
        result[dns] += 1;
      } else {
        result[dns] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
