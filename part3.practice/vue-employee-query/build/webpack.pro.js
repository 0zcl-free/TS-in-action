const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/main.ts',
  // https://webpack.docschina.org/guides/author-libraries/
  output: {
    libraryTarget: 'umd',
    library: 'EmployeeQuery'
  },
  // webpack-node-externals能够排除node_modules目录中所有模块:https://webpack.docschina.org/configuration/externals/
  externals: [nodeExternals()],
  plugins: [
      new CleanWebpackPlugin()
  ]
})
