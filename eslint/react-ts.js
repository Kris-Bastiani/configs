import tseslint from 'typescript-eslint';
import common from './common.js';
import { airbnb } from './lib/airbnb.js';

export default [
	...airbnb,
	...tseslint.config(
		tseslint.configs.recommended,
		common,
	),
];
