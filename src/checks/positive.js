const isNumber = require('./tools/isNumber');

/**
 * positive, check if number is positive
 *
 * @param {*} input - the input (will be casted to Number()
 *
 * @param {?boolean} include_zero - defaults to false
 *
 * @return {boolean} result - true / false
 */
module.exports = function positive (input, include_zero = false) {
	input = Number(input);

	return isNumber(input) && include_zero ?
		input >= 0 :
		input > 0;
}