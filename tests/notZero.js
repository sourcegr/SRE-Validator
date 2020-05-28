const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	zero: 0,
	one: 1,
	minus_one: -1,
	empty_string : '',
	quoted_zero: '0',
	zero_string: "0text",
	zero_space: '0 ',
	infinity: Infinity
};

const v = Validator.create(input)


describe('We check notZero', function () {
		it('1 IS NOT zero', function() {
			const res = v.setRules([{
				one: 'notZero'
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Infinity IS NOT zero', function() {
			const res = v.setRules([{
				infinity: 'notZero'
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('-1 IS NOT zero', function() {
			const res = v.setRules([{
				minus_one: 'notZero'
			}]).validate();
			assert.strictEqual(res, true);
		});


		it('"" IS zero', function() {
			const res = v.setRules([{
				empty_string: 'notZero'
			}]).validate();
			assert.strictEqual(res, false);
		});

		it('0 IS zero', function() {
			const res = v.setRules([{
				zero: 'notZero'
			}]).validate();
			assert.strictEqual(res, false);
		});

		it('"0" IS  zero', function() {
			const res = v.setRules([{
				quoted_zero: 'notZero'
			}]).validate();
			assert.strictEqual(res, false);
		});

		it('"0<space>" IS zero', function() {
			const res = v.setRules([{
				zero_space: 'notZero'
			}]).validate();
			assert.strictEqual(res, false);
		});

});