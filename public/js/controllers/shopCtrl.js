/*
    This module assumes that there will be at least
    one thing being sold in the shop
*/

module.exports = function($scope, ShopSrvc, CartSrvc) {
    
    $scope.shopItems = ShopSrvc.getShopItems();
    $scope.cartItems = CartSrvc.getCartItems();
    
    $scope.numInCart = 0;

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    

}
