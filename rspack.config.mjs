import { defineConfig } from '@rspack/cli';

export default defineConfig({
	entry: {
		background: './src/background.ts',
		'script/syosetu': './src/script/syosetu.ts',
		'script/alphapolis': './src/script/alphapolis.ts',
	},
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: [/node_modules/],
				loader: 'builtin:swc-loader',
				options: {
					jsc: {
						parser: {
							syntax: 'typescript',
						},
					},
				},
				type: 'javascript/auto'
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	devtool: false,
});
