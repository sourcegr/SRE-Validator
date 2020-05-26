/**
 * minLength, check for a min Length
 *
 * @param {string} input - the input
 *
 * @param {number} length - the min length of the input
 * @param {boolean} include_limits - if the limits should be
 *
 * @return {boolean} result - False if the @input length is less than the length
 */
module.exports = function minLength (input, length, include_limits = false) {
	input = String(input);
	length = Number(length);

	return include_limits ?
		input.length >= length :
		input.length > length;
}