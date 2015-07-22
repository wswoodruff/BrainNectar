'use strict';
var webpack = require('webpack');
var path = require('path');

webpack.cache = true;

// PATHS
var PATHS = {  
    app: __dirname + '/public',
    bootstrapFonts: path.resolve(__dirname, "./public/bower_components/bootstrap-sass/assets/fonts/bootstrap"),
    sassFiles: path.resolve(__dirname, "./public/css/"),
    bowerRoot: path.resolve(__dirname, "./public/bower_components")
};

var config = {};

config.devtool = 'eval-cheap-source-map';
config.context = PATHS.app;

config.entry = {
    app: ['webpack/hot/dev-server', './js/bootstrapApp.js']
};

config.output = {
  path: PATHS.app,
  filename: 'bundle.js'
}

config.resolve = {
    alias: {}
}

config.addVendor = function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
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

    noParse: []
}

config.postcss = function () {
    return [autoprefixer, csswring];
}


/*
    These need to be required by their aliases in ./public/js/vendor.js
*/


config.addVendor("angular", PATHS.bowerRoot + "/angular/angular.js");
config.addVendor("ui-router", PATHS.bowerRoot + "/ui-router/release/angular-ui-router.js");
config.addVendor("moment", PATHS.bowerRoot + "/moment/moment.js");
config.addVendor("jquery", PATHS.bowerRoot + "/jquery/dist/jquery.js");
config.addVendor("chance", PATHS.bowerRoot + "/chance/chance.js");
config.addVendor("lodash", PATHS.bowerRoot + "/lodash/lodash.js");
config.addVendor("ui-bootstrap", PATHS.bowerRoot + "/angular-bootstrap/ui-bootstrap.js");





module.exports = config;




