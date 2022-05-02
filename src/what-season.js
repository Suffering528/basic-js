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
let currentMonth = date.getMonth()
  if (currentMonth <= 2){
    return "Winter"
  } if (currentMonth <= 3,4,5){
    return "Spring"
  } if (currentMonth <= 6,7,8){
    return "Summer"
  } else {
    return "Autumn"
  }
} 


module.exports = {
  getSeason
};
