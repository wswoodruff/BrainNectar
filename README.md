# BrainNectar
Brain Nectar is a delicious beverage that improves your cognitive abilities! It's FDA approved and can be consumed safely in any quantity. Be limitless!

# Instructions to run locally

#### Table of Contents

* Instructions to run project locally with Node

* Instructions to run the hot update dev server environment via webpack

* Module locations

<hr>

#### Instructions to run project locally with Node


1. If you haven't done so already, clone the Brain Nectar repo locally and run ```npm install``` in the root directory of the project to install the project dependencies.

2. Open Terminal, navigate to the root directory of the project and type:
```
npm start
```

<hr>

#### Instructions to run the dev environment via webpack


1. If you haven't done so already, clone the Brain Nectar repo locally and run ```npm install``` in the root directory of the project to install the project dependencies.

2. Open Terminal, navigate to the root directory of the project and type:
```
npm run dev
```


This runs webpack and opens webpack's hot dev server, which watches modules and refreshes the browser when a module changes. This includes Sass files.

This is nice since webpack only rebuilds and injects the module that changed, rather than rebuilding the whole project.

<hr>

#### Module locations

JavaScript modules are in /public/js/

Sass files are in /public/css/
