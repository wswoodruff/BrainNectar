module.exports = function($scope, CartSrvc) {
    
    var cartItems = CartSrvc.getCartItems();

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })
    
    $scope.itemsInCart = function() {
        if(cartItems.length === 0) {
            return false;
        } else {
            return true;
        }
    }
}
