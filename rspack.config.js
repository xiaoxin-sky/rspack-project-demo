const path = require('path');
const NodePolyfill = require('@rspack/plugin-node-polyfill');
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	entry: {
		main: './src/main.js'
	},

	plugins: [new NodePolyfill()],
	builtins: {
		presetEnv:null,
		html: [
			{
				template: './index.html'
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.(png)|(gif)$/,
				type: 'asset'
			},
			{ test: /\.js$/, type: 'jsx' },
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'sass-loader',
						options: {
							// ...
						}
					}
				],
				type: 'css'
			},
			{
				test: /\.module\.scss$/i,
				type: 'css/module'
			}
		]
	}
};
