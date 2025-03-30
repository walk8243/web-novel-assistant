import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// list entries in src/script directory
// and use them as inputs for rollup
const dir = fs.readdirSync(path.resolve(__dirname, 'src/script'), { withFileTypes: true });
const inputs = dir.reduce<{[name: string]: string}>((pre, cur) => {
	pre[`script/${path.parse(cur.name).name}`] = path.relative(__dirname, path.resolve(cur.parentPath, cur.name));
	return pre;
}, { background: './src/background.ts' });

export default defineConfig({
	build: {
		rollupOptions: {
			input: inputs,
			output: {
				entryFileNames: '[name].js',
			}
		}
	}
});
