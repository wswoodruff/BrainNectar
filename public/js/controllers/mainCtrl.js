/*
    These shorthand requires are defined in webpack.config.js
*/
var $ = require("jquery");

var pageOriginalMargin;
var domLoaded = false;

module.exports = function($scope, $state, ResizeSrvc) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        pageOriginalMargin = $(".page").css("margin-left");
        domLoaded = true;
        if(ResizeSrvc.isMobileWidth()) {
            setPageMargin(true);
        }
    })
    
    function setPageMargin(isMobileWidth) {
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
    
    function onMobileWidthToggle(isMobileWidth) {
        if(!domLoaded) {
            domLoadedFunction = onMobileWidthToggle;
            return;
        }
        setPageMargin(isMobileWidth);
    }
    
    ResizeSrvc.addMobileCallback(onMobileWidthToggle);
    
}
