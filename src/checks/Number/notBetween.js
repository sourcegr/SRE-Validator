const between = require('./between');
/**
 * notBetween checks if the number is NOT between two values
 * @param {number} input - the number to check against
 * @param {[number, number, ?boolean]} params - An array with the [min, max, include_limits=true] values
 *
 * @return {boolean} true if the number is NOT between the limits
 *
 */
module.exports = function notBetween (input, params) {
	return !between(input, params);
}