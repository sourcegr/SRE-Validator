/**
 * Check if the given string is of exact length
 *
 * @param {string} input - the string to check against
 * @param {Boolean} param - the length required
 *
 * @return {boolean} result - the result
 */

module.exports = function exactLenght(input, param = 0) {
	return String(input).length === Number(param);
}