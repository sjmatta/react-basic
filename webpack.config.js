const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/dev-server',
    './src/index.jsx',
  ],
  devServer: {
    info: false,
    hot: true,
    inline: false,
    port: 8000,
    host: 'localhost',
    colors: true,
    progress: true,
    contentBase: 'build',
    historyApiFallback: true,
    stats: {
      colors: true,
      progress: true,
    },
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-2',
    }, {
      test: /\.json/,
      loader: 'json',
    }, {
      test: /\.css/,
      loader: 'style!css',
    }, {
      test: /\.scss/,
      loader: 'style!css!sass',
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.(ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }],
    resolve: {
      alias: {
        jquery: 'jquery/src/jquery',
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT_MODE: JSON.stringify(true),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      pkg: require('./package.json'),
      template: './src/index.html',
      inject: 'body',
    }),
  ],
};
