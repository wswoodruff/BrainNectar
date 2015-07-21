module.exports = function($scope, SalesFeed) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("sidebar loaded");
    })

    function applySalesFromServer(data) {
        $scope.$apply(function() {
            $scope.salesArray = data;
        })
    }

    SalesFeed.getDataAndBindCallbackForServerPush(applySalesFromServer);
}
