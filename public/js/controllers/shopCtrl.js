/*
    This module assumes that there will be at least
    one thing being sold in the shop
*/

module.exports = function($scope, ShopSrvc) {

    $scope.shopItems = ShopSrvc.getShopItems();

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    
    

}
