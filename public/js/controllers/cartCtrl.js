/*
    Exposes cart items and cart total from the ShopSrvc
*/

module.exports = function($scope, ShopSrvc) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    var shopItems = ShopSrvc.getShopItems();
    var itemsInCart = ShopSrvc.getItemsInCart();
    $scope.itemsInCart = itemsInCart;
    $scope.getCartTotal = function() {
        return ShopSrvc.getCartTotal();
    }
}
