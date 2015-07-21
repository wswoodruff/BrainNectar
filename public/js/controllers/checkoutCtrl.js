module.exports = function($scope, CartManager) {
    
    var itemsInCart = CartManager.getCartItems();

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    

}
