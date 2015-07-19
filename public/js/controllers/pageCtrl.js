module.exports = function($scope, $state) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("page loaded");
        $state.transitionTo("main.home");

        /*setTimeout(function() {
            $state.transitionTo("main.shop");
        }, 1000)*/
    })
}
