const lessThan = require('./lessThan');

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
	return lessThan(0, [input, include_zero]);
}