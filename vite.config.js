import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				background: './src/background.ts',
				'site/syosetu': './src/site/syosetu.ts',
			},
			output: {
				entryFileNames: '[name].js',
			}
		}
	}
});
