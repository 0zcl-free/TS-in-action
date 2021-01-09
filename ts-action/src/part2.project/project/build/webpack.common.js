const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	module: {
		rules: [{
			// Include ts, tsx, js, and jsx files.
			test: /\.(ts|js)x?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/tpl/index.html'
		}),
		new ForkTsCheckerWebpackPlugin()
	]
}