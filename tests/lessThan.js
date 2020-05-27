const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five: 5,
};

const v = Validator.create(input)
const tests = [
	['5 < 6', {lessThan: 6}, true],
	['5 < 5', {lessThan: 5}, false],
	['5 < 4', {lessThan: 4}, false],
	['5 ≤ 6', {lessThan: [6, true]}, true],
	['5 ≤ 5', {lessThan: [5, true]}, true],
	['5 ≤ 4', {lessThan: [4, true]}, false],
];






describe('We check lessThan on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});