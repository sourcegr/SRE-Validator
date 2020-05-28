const notEqualTo = require('./notEqualTo');
/**
 * notZero checks if input is number and not zero

 * @param {*} input - the input (will be casted to Number)
 *
 * @return {boolean}
 *
 */
module.exports = function notZero (input) {
	return notEqualTo(input, 0);
}