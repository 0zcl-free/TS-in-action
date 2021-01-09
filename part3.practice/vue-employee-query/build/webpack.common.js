// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	output: {
		filename: 'employee-query.js',
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', 'vue'],
		// https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A
		alias: {
      'vue$': 'vue/dist/vue.esm.js' // 使用完整版
    }
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.tsx?$/i,
				use: [{
					loader: 'ts-loader',
					options: {
						// 使用此选项，会关闭类型检查. 缩短使用 ts-loader 时的构建时间.
						transpileOnly: true,
						// 给.vue文件加上.ts后缀，方便ts-loader处理
						appendTsSuffixTo: [/\.vue$/]
					}
				}],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: './src/tpl/index.html'
		// }),
		// new ForkTsCheckerWebpackPlugin(),
		// 请确保引入这个插件！https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
		new VueLoaderPlugin()
	],
	// 优化: 将使用到的node_modules下的包的代码,打包到vendors块
	// optimization: {
	// 	splitChunks: {
	// 			chunks: 'all'
	// 	}
	// }
}