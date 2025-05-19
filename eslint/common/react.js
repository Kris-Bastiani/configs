import reactPlugin from 'eslint-plugin-react';

export default {
	plugins: {
		react: reactPlugin,
	},
	rules: {
		...reactPlugin.configs['jsx-runtime'].rules,
		'jsx-quotes': ['error', 'prefer-single'],
		'react/button-has-type': 'off',
		'react/function-component-definition': ['error', {
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function',
		}],
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': ['error', {
			classes: 'ignore',
			forbidDefaultForRequired: true,
			functions: 'defaultArguments',
		}],
	},
};
