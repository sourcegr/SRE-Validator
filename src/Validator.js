const checks = require('./checks');
const dd = console.log;

const Validator = function(input = null, rules = null) {
	this._rules = rules || [];
	this._input = input || null;
}

/**
 * factory function
 * @param {?Object} rules - The rules to match
 * @param {?Array} input - The input to check against
 *
 * @return {*} - we will see
 */
Validator.create = function(input = null, rules = null) {
	return new Validator(input, rules);
}

Validator.prototype.getErrors = function() {
	return this._errors;
}
Validator.prototype.setRules = function(rules) {
	this._rules = rules;
	return this;
}

Validator.prototype.addRule = function(rule) {
	this._rules = [...this._rules, rule];
	return this;
}

Validator.prototype.setInput = function(input) {
	this._input = input;
	return this;
}

Validator.prototype.validate = function() {
	const me = this;
	this._errors = [];

	if (this._input === null) {
		throw new Error('Nothing to validate against');
	}

	if (!Array.isArray(this._rules) || this._rules.length === 0) {
		throw new Error('No rules defined');
	}

	const input = this._input;

	const do_check = function(callback, value, ...params) {
		const res = checks[callback](input[value], ...params);
		if (!res) {
			me._errors.push(`${callback} ${input}`);
		}
		return res;
	}

	const check_rule = function(acc, rule) {
		return acc && Object.keys(rule).reduce((acc, variable_name) => {
			const rule_name = rule[variable_name];

			if (typeof rule_name === 'string') {
				return acc && do_check(
					rule_name,
					variable_name
				);
			} else {
				return acc && Object.keys(rule_name).reduce((acc, check) => {
					return acc && do_check(
						check,
						variable_name,
						rule_name[check]
					);
				}, true);
			}
		}, true);
	}


	return this._rules.reduce(check_rule, true);
}

module.exports = Validator;