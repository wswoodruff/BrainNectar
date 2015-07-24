/*
    Contains code to add or remove a margin (to accomodate the sidebar)
    for the ".page" view, depending on if the browser's width is
    less or greater than the mobile width breakpoint.

    Registers 'onMobileWidthToggle' with the ResizeSrvc to get called
    every time the browser width crosses the mobile width threshold
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
    
    // Gets called when the dom loads if the width is mobile width.
    function setPageMargin(isMobileWidth) {
        // In case the automatic call below happens before the DOM loads
        if(!domLoaded) {
            return;
        }
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
    
    // Registering this automatically calls it
    ResizeSrvc.addMobileCallback(setPageMargin);
}
