const lessThan = require('./lessThan');

/**
 * lessThanOrEqual, check if input is less than or equal to value
 *
 * @param {*} input - the input (will be casted to Number()
 * @param {number} value - defaults to 0
 *
 * @return {boolean} result - true / false
 */
module.exports = function lessThanOrEqual (input, value = 0) {
	return lessThan(input, [value, true]);
}