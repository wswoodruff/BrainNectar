var moment = require('../../bower_components/moment/moment.js');

module.exports = function($scope, SalesFeed) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("sidebar loaded");
    })
    
    function applySalesFromServer(data) {
        data.map(function(purchase, index) {
            purchase.relativeTime = moment(purchase.time).fromNow();
        })
        $scope.$apply(function() {
            $scope.salesArray = data;
        })
    }
    

    SalesFeed.getDataAndBindCallbackForServerPush(applySalesFromServer);
}
