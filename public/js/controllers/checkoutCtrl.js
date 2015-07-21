module.exports = function($scope, Cart) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("checkout loaded");
    })

    Cart.getCartItems();
}
