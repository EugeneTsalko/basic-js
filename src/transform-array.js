const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  } else if(arr.length === 0) {
    return arr;
  } 
  
  let array = arr.slice(); // копия входного массива, т.к. его изменять нельзя
  for (let i = 0; i < array.length; i++) {
    console.log(i)
    if (array[i] === '--discard-next') {

      if (i !== array.length - 1) {
        if(array[i+2] === '--double-prev' || array[i+2] === '--discard-prev') {
          array.splice(i, 3)
        } else {
          array.splice(i, 2);
        }
      } else array.splice(i, 1);

    } else if (array[i] === '--discard-prev') {

      if (i !== 0) {
        array.splice(i - 1, 1);
        array.splice(i - 1, 1)
      } else array.splice(i, 1);
      
    } else if (array[i] === '--double-next') {

      if (i !== array.length - 1) {
        array.splice(i, 1);
        array.splice(i, 0, array[i])
      } else array.splice(i, 1);
      
    } else if (array[i] === '--double-prev') {

      if (i !== 0) {
        console.log('111')
        array.splice(i, 1);
        array.splice(i, 0, array[i-1]) ////////////////
      } else array.splice(i, 1);
      
    }
  }
  return array;
}

module.exports = {
  transform
};
