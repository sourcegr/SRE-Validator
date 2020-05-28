const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	five_len: '12345',
};

const v = Validator.create(input)
const tests = [
	['5 > 6', {minLength: 6}, false],
	['5 > 5', {minLength: 5}, false],
	['5 > 4', {minLength: 4}, true],
	['5 ≥ 6', {minLength: [6, true]}, false],
	['5 ≥ 5', {minLength: [5, true]}, true],
	['5 ≥ 4', {minLength: [4, true]}, true],
];






describe('We check minLength on ' + input.five, function () {
	tests.map(([txt, rule, exp]) => {
		it( txt + ': ' + exp, function() {
			const res = v.setRules([{
				five_len: rule
			}]).validate();
			assert.strictEqual(res, exp);
		});
	});

});