const isNumber = require('./tools/isNumber');
/**
 * nonZero checks if input is number and not zero
 *
 * @return {boolean}
 *
 */
module.exports = function nonZero (input) {
	input = Number(input);
	return isNumber(input) && input !== 0 ;
}