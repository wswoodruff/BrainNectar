# BrainNectar
Brain Nectar is a delicious beverage that improves your cognitive abilities! It's FDA approved and can be consumed safely in any quantity. Be limitless!

# Instructions to run locally

#### Table of Contents

* Note about editing webpack.config.js for running in Node VS webpack's dev environment

* Instructions to run project locally with Node

* Instructions to run the dev environment via webpack

* Module locations

<hr>

#### Note:

When you surround a section of code with `/**/ /**/`, putting a space before the last slash in the first multicomment pair like this: `/** /` comments out the section. so:
```javascript
/** / This is commented out /**/

/**/ This is not commented out /**/
```

For webpack, the dev settings and production settings are different because webpack has a nice hot-reload server for development, and you either build the bundle.js to look for that or not by specifying an entry point in the "webpack.config.js" file.

<hr>

#### Instructions to run project locally with Node


1. If you haven't done so already, clone the Brain Nectar repo locally and run "npm install" in the root directory of the project to install the project dependencies.

2. As described in the note above, make '*webpack.config.js*' look like:
```javascript
// For hot reload during development, use this entry
/** /
config.entry = {
    app: ['webpack/hot/dev-server', './js/bootstrapApp.js']
};
/**/

// For production, must use this entry
/**/
config.entry = {
    app: ['./js/bootstrapApp.js']
};
/**/
```

3. Open Terminal, navigate to the root directory of the project and type:
```
npm start
```

<hr>

#### Instructions to run the dev environment via webpack


1. If you haven't done so already, clone the Brain Nectar repo locally run "npm install" in the root directory of the project to install the project dependencies.

2. As described in the note above, make '*webpack.config.js*' look like:
```javascript
// For hot reload during development, use this entry
/**/
config.entry = {
    app: ['webpack/hot/dev-server', './js/bootstrapApp.js']
};
/**/

// For production, must use this entry
/** /
config.entry = {
    app: ['./js/bootstrapApp.js']
};
/**/
```

3. Open Terminal, navigate to the root directory of the project and type:
```
npm run dev
```

This runs webpack and opens webpack's hot dev server, which watches modules and refreshes the browser when a module changes. This includes Sass files.

This is nice since webpack only rebuilds and injects the module that changed, rather than rebuilding the whole project.

<hr>

#### Module locations

JavaScript modules are in /public/js/

Sass files are in /public/css/
