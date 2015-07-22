var $ = require("jquery");

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

    $scope.diffShippingAddress = false;

    $scope.toggleShippingAddressCheckbox = function() {
        var checkbox = $(".shippingAddressCheckbox")[0];
        checkbox.checked = !checkbox.checked;
        $scope.diffShippingAddress = !$scope.diffShippingAddress;
    }
    
    $scope.taxAmount = 5.95
    $scope.shippingRate = 15;

    $scope.getCartSubtotal = function() {
        return ShopSrvc.getCartSubtotal();
    }
}
