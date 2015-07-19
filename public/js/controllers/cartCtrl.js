module.exports = function($scope) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("cart loaded");
    })
}
