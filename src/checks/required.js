/**
 * Check if the input exists as a key to the input
 *
 * @param {*} input - the input
 *
 * @return {Boolean} result - False on undefined / null
 */
module.exports = function required (input) {
	return input !== undefined && input !== null;
}