module.exports = function($scope, CartManager) {
    
    var cartItems = CartManager.getCartItems();

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
