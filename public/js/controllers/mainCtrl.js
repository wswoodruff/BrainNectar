module.exports = function($scope, $state) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("main loaded");
    })
}
