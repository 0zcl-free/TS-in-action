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
		rules: [
			{
				test: /\.tsx?$/i,
				use: [{
					loader: 'ts-loader',
					options: {
						// 使用此选项，会关闭类型检查. 缩短使用 ts-loader 时的构建时间.
						transpileOnly: true
					}
				}],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/tpl/index.html'
		}),
		new ForkTsCheckerWebpackPlugin()
	]
}