var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const FONT_OPTS = 'name=fonts/[name].[ext]&outputPath=dist/&publicPath=../';
module.exports = {
  entry: {
    "vendor": __dirname + "/app/vendor",
    "app": __dirname + "/app/main",
    "openapi": __dirname + "/app/openapi",
  },
  output: {
    path: __dirname + '/docs',
    filename: "dist/[name].bundle.js",
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader?interpolate=true',
    }, {
      test: /\.ts$/,
      loaders: ['ts-loader'],
    }, {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.pug$/,
      loader: ['raw-loader', 'pug-html-loader?doctype=html&plugins=pug-plugin-ng'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader"}),
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&' + FONT_OPTS
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream&' + FONT_OPTS
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?' + FONT_OPTS
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml&' + FONT_OPTS
    }, {
      test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml&' + FONT_OPTS
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin("dist/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "dist/vendor.bundle.js"}),
  ]
}
