var $ = require("jquery");

module.exports = function($scope, $timeout, ShopSrvc) {
    
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();

        $("#billingState").blur(function() {
            calculateTaxAmount($scope.billing.state);
        })

        $("#shippingState").blur(function() {
            calculateTaxAmount($scope.shipping.state);
        })
    })

    $scope.billing = {};

    $scope.shipping = {};

    $scope.creditCard = {
        expMonth: "Month",
        expYear: "Year"
    };
    
    $scope.itemsInCart = ShopSrvc.getItemsInCart();

    $scope.diffShippingAddress = false;

    $scope.cartTotal = ShopSrvc.getCartTotal();

    $scope.taxAmount = 0;

    $timeout(function() {
        calculateShippingRate();
        calculateGrandTotal();
    })
    

    /*
        Call when relevant state is valid (billing or shipping)
        Need to know which state to see if sales tax applies for
        in-state purchases (let's just say we run out of CA).
    */

    function calculateTaxAmount(state) {
        var tax = 0;
        var CaliforniaTaxRate = ".075";

        if(state == "CA") {
            tax = 5.95;
        } else {
            tax = 0;
        }

        $scope.taxAmount = tax;

        calculateGrandTotal();
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

        $scope.$apply(function() {
            $scope.grandTotal = total;
        })
    }

    $scope.submitPayment = function() {
        // alert("payment submitted");
    }
}
