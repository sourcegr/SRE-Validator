const moreThan = require('./moreThan');

/**
 * positive, check if number is positive
 *
 * @param {*} input - the input (will be casted to Number)
 * @param {?boolean} include_zero - defaults to false
 *
 * @return {boolean} result - true / false
 */
module.exports = function positive (input, include_zero = false) {
	return moreThan(input, [0, include_zero]);
}