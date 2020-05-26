/**
 * between checks if the number is between two values
 * @param {number} input - the number to check against
 * @param {{min:number, max:number, ?include_limits:boolean}} definition - An array with the [min, max, include_limits] values
 *
 * @return {boolean} true if the number is between the limits
 *
 */
module.exports = function between (input, definition) {
	if (!Array.isArray(definition) || definition.length < 2 || definition.length > 3) {
		throw new Error('minLength parameter should be an array with 2 members');
	}

	const n = Number(input);

	const [min, max, include_limits] = definition;

	return include_limits ?
		Number(min) <= n && n <= Number(max) :
		Number(min) < n && n < Number(max) ;
}