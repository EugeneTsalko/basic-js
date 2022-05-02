const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let strNumArr = (n +'').split('');
  console.log(strNumArr)
  let strNumsArr = [];
  for (let i = 0; i < strNumArr.length; i++) {
    let arr = strNumArr.slice()
    arr.splice(i, 1, '')
    strNumsArr.push(arr.join(''))
  }
  return strNumsArr.map(item => +item).sort((a, b) => a - b)[strNumsArr.length -1]
  // преобразуем массив строк в массив чисел, сортируем по возрастанию, 
  // возвращаем последний элемент массива
}

module.exports = {
  deleteDigit
};
