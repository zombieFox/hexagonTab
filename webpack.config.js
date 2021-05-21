const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const version = require('./src/manifest.json').version;

const name = require('./src/manifest.json').name;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/web'),
    clean: true
  },
  devServer: {
    port: 5000,
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/'
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: './src/manifest.json',
        to: './manifest.json'
      }, {
        from: './src/icon/',
        to: './icon/'
      }, {
        from: './src/initialBackground.js',
        to: './initialBackground.js'
      }]
    }),
    new ZipPlugin({
      path: path.resolve(__dirname, 'dist/extension'),
      filename: name + '_' + version + '.zip'
    })
  ]
};





// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ZipPlugin = require('zip-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//
// const version = require('./src/manifest.json').version;
// const name = require('./src/manifest.json').name;
//
// module.exports = {
//   entry: {
//     index: path.resolve(__dirname, 'src', 'index.js')
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist/web'),
//   },
//   optimization: {
//     minimize: true
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin(),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'src', 'index.html')
//     }),
//     new CopyPlugin({
//       patterns: [{
//         from: './src/manifest.json',
//         to: './manifest.json'
//       }, {
//         from: './src/icon/',
//         to: './icon/'
//       }, {
//         from: './src/initialBackground.js',
//         to: './initialBackground.js'
//       }]
//     }),
//     new ZipPlugin({
//       path: path.resolve(__dirname, 'dist/extension'),
//       filename: name + '_' + version + '.zip'
//     }),
//     new OptimizeCssAssetsPlugin({
//       cssProcessorPluginOptions: {
//         preset: ['default', { discardComments: { removeAll: true } }],
//       }
//     })
//   ],
//   module: {
//     rules: [{
//       test: /\.css$/i,
//       use: [MiniCssExtractPlugin.loader, 'css-loader']
//     }, {
//       test: /\.(ttf|woff|woff2)$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//           outputPath: 'font/'
//         },
//       }
//     }, {
//       test: /\.(jpe?g|png|gif|svg)$/i,
//       use: [{
//         loader: 'file-loader',
//       }]
//     }]
//   }
// };
