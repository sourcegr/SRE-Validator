const lessThan = require('./lessThan');

/**
 * negative, check if number is negative
 *
 * @param {*} input - the input (will be casted to Number()
 *
 * @param {?boolean} include_zero - defaults to false
 *
 * @return {boolean} result - true / false
 */
module.exports = function negative (input, include_zero = false) {
	return lessThan(input, [0, include_zero]);
}