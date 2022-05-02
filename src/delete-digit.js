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
  for (let elem of n){
    if (elem === Number){
    return true
  }else {
    return false
  } 
} 
  const string = n.toString.slice(s).slice(0)
  return string
}

module.exports = {
  deleteDigit
};
