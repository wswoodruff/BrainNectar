module.exports = function () {
    /* Styles */
    require('../css/main.scss');
    
    /* JS */

    /*
        The strings in these require calls are defined in webpack.config.js
    */
    require("jquery");
    require("chance");
    require("angular");
    require("ui-router");
    require("ui-bootstrap");
    require("lodash");
    require("ngAnimate");
}
