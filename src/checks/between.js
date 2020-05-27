const isNumber = require('./tools/isNumber');
/**
 * between checks if the number is between two values
 * @param {number} input - the number to check against
 * @param {{min:number, max:number, ?include_limits:boolean}} definition - An array with the [min, max, include_limits=true] values
 *
 * @return {boolean} true if the number is between the limits
 *
 */
module.exports = function between (input, definition) {
	if (!Array.isArray(definition) || definition.length < 2 || definition.length > 3) {
		throw new Error('minLength parameter should be an array with 2 members');
	}
	const check = Number(input);
	let [min, max, include_limits] = definition;
	if (include_limits === undefined) include_limits = true;

	return isNumber(input) && include_limits ?
		Number(min) <= check && check <= Number(max) :
		Number(min) < check && check < Number(max) ;
}