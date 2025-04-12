import tseslint from 'typescript-eslint';
import common from './common';
import { airbnbBase } from './lib/airbnb';

export default [
	...airbnbBase,
	...tseslint.config(
		tseslint.configs.recommended,
		common,
	),
];
