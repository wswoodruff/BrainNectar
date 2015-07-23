var $ = require("jquery");

module.exports = function($scope, ShopSrvc) {
    
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })

    $scope.billingInfo = {};

    $scope.shippingInfo = {};

    $scope.creditCardInfo = {};

    $scope.itemsInCart = ShopSrvc.getItemsInCart();

    $scope.diffShippingAddress = false;

    $scope.cartTotal = ShopSrvc.getCartTotal();
    calculateTaxAmount();
    calculateShippingRate();
    calculateGrandTotal();
    
    /*
        Call when relevant state is valid (billing or shipping)
        Need to know which state to see if sales tax applies for
        in-state purchases (let's just say we run out of CA).
    */
    function calculateTaxAmount() {
        var tax = 0;
        var CaliforniaTaxRate = ".075";

        var livesInCalifornia = true;
        if(livesInCalifornia) {
            $scope.taxAmount = 5.95;
        } else {
            $scope.taxAmount = 0;
        }
    }

    // Call when relevant address is valid (billing or shipping)
    function calculateShippingRate() {
        $scope.shippingRate = 15;
    }

    function calculateGrandTotal() {
        var total = 0;
        total += $scope.cartTotal;
        total += $scope.taxAmount;
        total += $scope.shippingRate;
        $scope.grandTotal = total;
    }
}
