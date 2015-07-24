/*
    Handles the + and - buttons in the cart.
*/

module.exports = function($scope, $state, ShopSrvc) {

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    
    $scope.numInCart = 0;

    $scope.shopItems = ShopSrvc.getShopItems();

    $scope.increaseInCart = function(itemName) {
        ShopSrvc.increaseQtyInCart(itemName);
    }

    $scope.decreaseInCart = function(itemName) {
        ShopSrvc.decreaseQtyInCart(itemName);
    }
}
