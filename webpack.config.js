var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './app/entry/index',
  output: {
    path:path.join(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
            {
                test: /\.css$/, 
                loader: "style!css", 
            },
            {
                test: /\.jsx?$/, 
                loader: "babel", 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.less$/,
              loader: 'style!css!less'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000
                }
            }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js'),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
