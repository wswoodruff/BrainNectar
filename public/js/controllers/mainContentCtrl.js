module.exports = function($scope, $state) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("main content loaded");
        $state.go('main.layout.home');
    })
}
