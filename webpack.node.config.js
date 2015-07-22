'use strict';
var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
        {   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   
            loader: "url?limit=10000&minetype=application/font-woff",
            include: PATHS.bootstrapFonts 
        },
        {   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  
            loader: "url?limit=10000&minetype=application/font-woff",
            include: PATHS.bootstrapFonts 
        },
        {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
            loader: "url?limit=10000&minetype=application/octet-stream",
            include: PATHS.bootstrapFonts 
        },
        {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
            loader: "file-loader",
            include: PATHS.bootstrapFonts 
        },
        {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    
            loader: "url?limit=10000&minetype=image/svg+xml",
            include: PATHS.bootstrapFonts 
        },
        { 
            test: /\.scss$/,
            loader: "style-loader!css-loader!postcss-loader!sass?indentedSyntax",
            include: PATHS.sassFiles 
        }
    ],
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
}

config.postcss = function () {
    return [autoprefixer, csswring];
}

module.exports = config;
