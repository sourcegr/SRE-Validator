const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five_len: '12345',
};

const v = Validator.create(input)
const tests = [
	['5 < 6', {maxLength: 6}, true],
	['5 < 5', {maxLength: 5}, false],
	['5 < 4', {maxLength: 4}, false],
	['5 ≤ 6', {maxLength: [6, true]}, true],
	['5 ≤ 5', {maxLength: [5, true]}, true],
	['5 ≤ 4', {maxLength: [4, true]}, false],
];






describe('We check maxLength on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five_len: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});