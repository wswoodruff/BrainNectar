module.exports = function($scope, $state, MobileWidthWatch) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("main loaded");
    })
    
    function mobileWidthToggle(isMobileWidth) {
        if(isMobileWidth) {
            console.log("is MobileWidth");
        } else {
            console.log("is not MobileWidth");
        }
    }
    MobileWidthWatch.addMobileCallback(mobileWidthToggle);
}
