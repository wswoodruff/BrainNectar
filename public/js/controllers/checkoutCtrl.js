module.exports = function($scope, ShopSrvc) {
    
    var itemsInCart = ShopSrvc.getItemsInCart();
    $scope.itemsInCart = itemsInCart;
    
    $scope.getTotalPrice = function() {
        var total = 0;
        itemsInCart.map(function(item) {
            total += item.price * item.qtyInCart;
        })
        return total;
    }
    
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    
}
