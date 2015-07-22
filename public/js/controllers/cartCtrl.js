module.exports = function($scope, ShopSrvc) {
    
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    var shopItems = ShopSrvc.getShopItems();

    $scope.itemsInCart = function() {
        return ShopSrvc.getItemsInCart();
    }
}
