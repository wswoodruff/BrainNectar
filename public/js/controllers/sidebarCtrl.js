/*
    These shorthand requires are defined in webpack.config.js
*/
var moment = require('moment');
var $ = require('jquery');

module.exports = function($scope, SalesFeed) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        if($(window).width() <= 768) {
            $scope.mobileWidth = true;
        }
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

    $(window).resize(function() {
        if($(window).width() <= 768) {
            $scope.$apply(function() {
                $scope.mobileWidth = true;
            })
        } else {
            $scope.$apply(function() {
                $scope.mobileWidth = false;
            })
        }
    })
}
