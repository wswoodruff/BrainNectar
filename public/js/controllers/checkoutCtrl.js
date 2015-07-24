var $ = require("jquery");

module.exports = function($scope, $timeout, ShopSrvc) {
    
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();

        /*
            Listen for the blur event on the billing state field to
            update the tax immediately when the user changes the state
        */
        $("#billingState").blur(function() {
            if(!$scope.diffShippingAddress) {
                calculateTaxAmount($scope.billing.state);
            }
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

    $scope.toggleDiffShippingAddress = function() {
        $scope.diffShippingAddress = !$scope.diffShippingAddress;
        if(!$scope.diffShippingAddress) {
            calculateTaxAmount($scope.billing.state);
        } else {
            calculateTaxAmount($scope.shipping.state);
        }
    }

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
        var californiaTaxRate = ".075";

        if(state == "CA") {
            tax = $scope.cartTotal * californiaTaxRate;
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

    $scope.checkoutWithPaypal = function() {
        alert("Open paypal in another window");
    }

    $scope.submitPayment = function() {
        alert("Payment submitted. See you're getting smarter already!");
    }
}
