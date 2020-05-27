const isNumber = require('./tools/isNumber');

/**
 * negative, check if number is negative
 *
 * @param {*} input - the input (will be casted to Number()
 *
 * @param {?boolean} include_zero - defaults to false
 *
 * @return {boolean} result - true / false
 */
module.exports = function negative (input, include_zero = true) {
	input = Number(input);

	return isNumber(input) && include_zero ?
		input <= 0 :
		input < 0;
}