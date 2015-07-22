/*
    These shorthand requires are defined in webpack.config.js
*/
var $ = require("jquery");

var pageOriginalMargin;

module.exports = function($scope, $state, MobileWidthWatch) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        pageOriginalMargin = $(".page").css("margin-left");
    })


    function onMobileWidthToggle(isMobileWidth) {
        if(isMobileWidth) {
            $(".page").css({
                margin: 0
            })
        } else {
            $(".page").css({
                marginLeft: pageOriginalMargin
            })
        }
    }

    MobileWidthWatch.addMobileCallback(onMobileWidthToggle);

}
