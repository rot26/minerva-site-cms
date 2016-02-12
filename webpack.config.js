var webpack = require('webpack');
var entry = [
  './public/js/app.js'
],
  output = {
    path: __dirname,
    filename: 'bundle.js'
  };

module.exports.development = {
    debug : false,
    devtool : 'eval',
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.jade$/, loader: "jade" },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /jquery\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
  };
