const moreThan = require('./moreThan');

/**
 * moreThanOrEqual, check if input is more than or equal to value
 *
 * @param {*} input - the input (will be casted to Number)
 *
 * @param {number} value - defaults to 0
 *
 * @return {boolean} result - true / false
 */
module.exports = function moreThanOrEqual (input, value = 0) {
	return moreThan(input, [value, true]);
}