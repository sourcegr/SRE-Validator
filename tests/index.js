const assert = require('assert');
const Validator = require('../src/Validator');

global.dd = console.log;


const input = {
	test_text: 'this is a text to check against',
	test_number: 100,
	test_array: [],
	the_zero: 0,
	five: 5,
	minus_five: -5,
};

const v = Validator.create(input)

describe('Number validations:', function() {
	describe('required:', function() {
		it('Should return TRUE, "test_text" exists', function () {
			const res = v.setRules([{
				test_text: 'required'
			}]).validate();
			assert.strictEqual(res, true);
		});
	});


	describe('nonZero:', function () {
		it('Should return FALSE, number is zero', function() {
			const res = v.setRules([{
				the_zero: 'nonZero'
			}]).validate();
			assert.strictEqual(res, false);
		});
		it('Should return TRUE, number is positive', function() {
			const res = v.setRules([{
				five: 'nonZero'
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Should return TRUE, number is negative', function() {
			const res = v.setRules([{
				minus_five: 'nonZero'
			}]).validate();
			assert.strictEqual(res, true);
		});
	});

	describe('notBetween:', function () {
		it('Should return FALSE, number is between the limit', function() {
			const res = v.setRules([{
				test_number: {notBetween: [90, 110]}
			}]).validate();
			assert.strictEqual(res, false);
		});
		it('Should return TRUE, number is NOT between the limit', function() {
			const res = v.setRules([{
				test_number: {notBetween: [90, 92]}
			}]).validate();
			assert.strictEqual(res, true);
		});
	});
});
describe('String validations:', function() {
	describe('minLength:', function() {
		it('Should return TRUE, the length of the string is more than the limit', function() {
			const res = v.setRules([{
				test_text: {minLength: 5}
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Should return TRUE, the length of the string is the upper limit', function() {
			const res = v.setRules([{
				test_text: {minLength: [31, true]}
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Should return FALSE, the length of the string is the upper limit', function() {
			const res = v.setRules([{
				test_text: {minLength: [31, false]}
			}]).validate();
			assert.strictEqual(res, false);
		});
		it('Should return FALSE, the length of the string is less than the limit', function() {
			const res = v.setRules([{
				test_text: {minLength: 55}
			}]).validate();
			assert.strictEqual(res, false);
		});
	});
	describe('maxLength:', function() {
		it('Should return FALSE, the length of the string is more than the limit', function() {
			const res = v.setRules([{
				test_text: {maxLength: 5}
			}]).validate();
			assert.strictEqual(res, false);
		});
		it('Should return TRUE, the length of the string is the upper limit', function() {
			const res = v.setRules([{
				test_text: {maxLength: [31, true]}
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Should return FALSE, the length of the string is the upper limit', function() {
			const res = v.setRules([{
				test_text: {maxLength: [31, false]}
			}]).validate();
			assert.strictEqual(res, false);
		});
		it('Should return TRUE, the length of the string is less than the limit', function() {
			const res = v.setRules([{
				test_text: {maxLength: 55}
			}]).validate();
			assert.strictEqual(res, true);
		});
	});

	describe('required:', function() {
		it('Should return TRUE, "test_text" exists', function() {
			const res = v.setRules([{
				test_text: 'required'
			}]).validate();
			assert.strictEqual(res, true);
		});
		it('Should return FALSE, "test_not_here" does not exist', function() {
			const res = v.setRules([{
				test_not_here: 'required'
			}]).validate();
			assert.strictEqual(res, false);
		});
	});
});

//
// const Validator = require('../src/Validator');

//
// const rules = [
// 	{testtext: 'required'},
// 	{testtext: {
// 		minLength: 20
// 	}}
// ];
//
// const input = {
// 	testtext: 'vagelis'
// }
//
// const v = Validator.create(rules, input);
// v.validate();