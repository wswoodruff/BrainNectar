/*
    This module assumes that there will be at least
    one thing being sold in the shop
*/

module.exports = function($scope, $state, ShopSrvc) {

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    
    $scope.numInCart = 0;
    
    var shopItems = ShopSrvc.getShopItems();

    $scope.shopItems = shopItems;

    $scope.increaseInCart = function(itemName) {
        ShopSrvc.increaseQtyInCart(itemName);
    }

    $scope.decreaseInCart = function(itemName) {
        ShopSrvc.decreaseQtyInCart(itemName);
    }
}
