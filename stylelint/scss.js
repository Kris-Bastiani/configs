const { REGEX_BEM } = require('./constants');

module.exports = {
	extends: ['stylelint-config-standard-scss', './common.js'],
	rules: {
		'scss/at-mixin-pattern': [
			REGEX_BEM,
			{
				message: 'Expected mixin name to follow BEM conventions',
			},
		],
		'scss/dollar-variable-pattern': [
			REGEX_BEM,
			{
				message: 'Expected SCSS variable to follow BEM conventions',
			},
		],
	},
};
