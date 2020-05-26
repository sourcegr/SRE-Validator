const between = require('./between');
/**
 * notBetween checks if the number is NOT between two values
 * @param {number} input - the number to check against
 * @param {{min:number, max:number, ?include_limits:boolean}} definition - An array with the [min, max, include_limits] values
 *
 * @return {boolean} true if the number is NOT between the limits
 *
 */
module.exports = function notBetween (input, definition) {
	return !between(input, definition);
}