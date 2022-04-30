const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members) || members.length === 0) {
    return false;
  } else {
    let resultArr = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        resultArr.push(members[i].trim()[0].toUpperCase())
      } else continue;
    }
    return resultArr.sort().join(''); // sort() по дефолту соритрует по алфавиту
  }
}

module.exports = {
  createDreamTeam
};
