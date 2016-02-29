const config = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const _ = require('lodash');

_.assign(config, {
  entry: [
    './src/index.jsx',
  ],
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT_MODE: JSON.stringify(false),
    }),
    new HtmlPlugin({
      pkg: require('./package.json'),
      template: './src/index.html',
      inject: 'body',
    }),
  ],
});

delete config.devServer;
delete config.cache;
delete config.devtool;

module.exports = config;
