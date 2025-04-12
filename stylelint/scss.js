import { REGEX_BEM } from './constants.js';

export default {
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
