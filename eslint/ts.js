import tseslint from 'typescript-eslint';
import common from './common/default.js';
import { airbnbBase } from './lib/airbnb.js';

export default [
	...airbnbBase,
	...tseslint.config(
		tseslint.configs.recommended,
		common,
	),
];
