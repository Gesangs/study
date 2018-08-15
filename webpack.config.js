const path = require('path')
// 压缩文件
const UglifyPlugin = require('uglifyjs-webpack-plugin')
// html模版
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分离css文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './scr/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: 'babel-loader'
    }, {
      test: /\.less$/,
      include: [
        path.resolve(__dirname, 'scr'),
      ],
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    ],
  },

  reslove: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new UglifyPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
  ]
}