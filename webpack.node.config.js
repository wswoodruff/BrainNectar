'use strict';
var webpack = require('webpack');
var path = require('path');

// PATHS
var PATHS = {  
  app: __dirname + '/public',
};

var config = {};

config.devtool = 'source-map';
config.context = PATHS.app;

config.entry = {
    app: ['./js/bootstrapApp.js']
};

config.output = {
  path: PATHS.app,
  filename: 'bundle.js'
}

var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');

config.module = {
    loaders: [
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
        { 
            test: /\.scss$/,
            loader: "style-loader!css-loader!postcss-loader!sass?indentedSyntax" 
        }
    ]
}

config.postcss = function () {
    return [autoprefixer, csswring];
}

module.exports = config;
