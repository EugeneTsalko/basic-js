const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!'; // проверка на то, передан ли аргумент
  } else if(!Date.parse(date)) {
    throw new Error('Invalid date!'); // проверка на то, дата ли передана (парсит миллисекунды с 01/01/1970)
  } else if(Object.getOwnPropertyNames(date).length) { // возвращает массив со всеми пропертями
    throw new Error('Invalid date!'); // провека на фейковую дату, у date массив пропертей имеет длину 0
  } else {
    let month = date.getMonth();
    let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn','autumn', 'winter'];
    return seasons[month];
  }
}

module.exports = {
  getSeason
};
