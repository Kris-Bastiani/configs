module.exports = {
	parser: '@typescript-eslint/parser',
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			jsconfig: {
				config: 'tsconfig.json',
				extensions: ['.js', '.jsx'],
			},
			typescript: {
				alwaysTryTypes: true,
				project: 'tsconfig.json',
			},
		},
	},
};
