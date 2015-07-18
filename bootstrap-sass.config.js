module.exports = {
  bootstrapCustomizations: "./_bootstrap-customizations.scss",
  mainSass: "./public/css/_index.scss", // path to your main SASS file (optional)
  verbose: true, // print out your custom files used
  debug: true, // print out the full generated scss file
  scripts: {
    // add every bootstrap script you need
    'transition': true
  },
  styles: {
    // add every bootstrap style you need
    "mixins": true,

    "normalize": true,
    "print": true,

    "scaffolding": true,
    "type": true,
  }
};
