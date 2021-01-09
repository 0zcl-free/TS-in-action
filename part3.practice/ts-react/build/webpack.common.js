const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
	entry: {
		"app": './src/index.tsx'
	},
	output: {
		filename: '[name].[chunkhash:8].js',
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
	],
	// 优化: 将使用到的node_modules下的包的代码,打包到vendors块
	optimization: {
		splitChunks: {
				chunks: 'all'
		}
	}
}