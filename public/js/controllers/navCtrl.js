/*
    Nothing much to see here
*/

module.exports = function($scope) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    $scope.navCollapsed = true;
}
