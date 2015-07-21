var $ = require("../../bower_components/jquery/dist/jquery.js");

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
