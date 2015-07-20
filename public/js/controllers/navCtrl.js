module.exports = function($scope) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("nav loaded");
    })
    $scope.navCollapsed = true;
}
