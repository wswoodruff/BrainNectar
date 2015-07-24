/*
    Holds the sales feed and registers a callback to be called when the
    server pushes down new info.
*/

var moment = require('moment');
var $ = require('jquery');

module.exports = function($scope, SalesFeedSrvc, ResizeSrvc, $timeout) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    // initialize numSales
    $scope.numSales = 0;
    
    function applySalesFromServer(data, numSales) {
        data.map(function(purchase, index) {
            purchase.relativeTime = moment(purchase.time).fromNow();
        })
        $scope.$apply(function() {
            $scope.salesArray = data;
            $scope.numSales = numSales;
        })
    }
    
    SalesFeedSrvc.getDataAndBindCallbackForServerPush(applySalesFromServer);

    // Registering this automatically calls it
    ResizeSrvc.addMobileCallback(function(isMobileWidth) {
        if(isMobileWidth) {
            $timeout(function() {
                $scope.$apply(function() {
                    $scope.mobileWidth = true;
                })
            })
        } else {
            $timeout(function() {
                $scope.$apply(function() {
                    $scope.mobileWidth = false;
                })
            })
        }
    });
}
