const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['5 ≤ 6', {lessThanOrEqual: 6}, true],
	['5 ≤ 5', {lessThanOrEqual: 5}, true],
	['5 ≤ 4', {lessThanOrEqual: 4}, false],
];






describe('We check lessThanOrEqual on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});