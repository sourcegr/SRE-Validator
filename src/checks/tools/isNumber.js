module.exports = function isNumber(x) {
	return (typeof(x) === 'number' || typeof(x) === "string" && x.trim() !== '') && !isNaN(x);
}