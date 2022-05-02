const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return chain.length; //возвращает текущую длину цепи в виде числа;
  },
  addLink(value) { //добавляет звено, содержащее строковое представление value к цепочке;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if (value) { // метод чейнится
      this.chain.push(value);
      return this; 
    // } 
    // else {
    //   this.chain.push('');
    //   return this;
    // }
  },
  removeLink(position) { //удаляет звено цепи, находящееся в заданном положении;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || // метод чейнится
    position <= 0 || 
    position > this.chain.length) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } 
    
    this.chain.splice(position - 1, 1); //position - 1 = index
    return this;
    
  },
  reverseChain() { //разворачивает цепь задом наперед;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain = this.chain.reverse(); //метод чейнится
    return this;
  },
  finishChain() { //завершает цепь и возвращает ее.
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
