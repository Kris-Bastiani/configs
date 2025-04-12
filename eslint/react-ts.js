import tseslint from 'typescript-eslint';
import common from './common';
import { airbnb } from './lib/airbnb';

export default [
	...airbnb,
	...tseslint.config(
		tseslint.configs.recommended,
		common,
	),
];
