export default {
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-underscore-dangle': ['error', { allow: ['__dirname'] }],
	},
};
