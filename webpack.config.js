var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('../styles/site.css');

var entry = [
  './public/js/app.js'
],
  output = {
    path: __dirname,
    filename: 'bundle.js'
  };

module.exports.development = {
    debug : false,
    entry: entry,
    production: true,
    output: output,
    plugins: [
      extractCSS
    ],
    module : {
        loaders : [
            { test: /\.jade$/, loader: "jade" },
            { test: /jquery\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /bootstrap/, loader: 'imports?jQuery=jquery' },

            // loads bootstrap's css.
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.scss$/i, loader: extractCSS.extract(['css','sass']) }
        ]
    }
  };
