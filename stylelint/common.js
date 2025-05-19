import { REGEX_BEM, REGEX_BEM_ALLOWED_UNDERSCORE_PREFIX } from './constants.js';

export default {
	extends: ['stylelint-config-recess-order'],
	plugins: [
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-high-performance-animation',
	],
	rules: {
		'custom-property-pattern': [
			REGEX_BEM_ALLOWED_UNDERSCORE_PREFIX,
			{
				message: 'Expected custom property to follow BEM conventions, with an optional leading underscore',
			},
		],
		'keyframes-name-pattern': [
			REGEX_BEM,
			{
				message: 'Expected keyframes name to follow BEM conventions',
			},
		],
		'no-descending-specificity': [
			true,
			{ ignore: ['selectors-within-list'] },
		],
		'selector-class-pattern': [
			REGEX_BEM,
			{
				message: 'Expected class selector to follow BEM conventions',
			},
		],
		'selector-id-pattern': [
			REGEX_BEM,
			{
				message: 'Expected ID selector to follow BEM conventions',
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['export', 'global', 'import'],
			},
		],
		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-low-performance-animation-properties': [
			true,
			{
				ignoreProperties: ['visibility'],
			},
		],
	},
};
