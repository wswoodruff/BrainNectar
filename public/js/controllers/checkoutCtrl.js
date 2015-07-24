/*
    I am having issues detecting the $invalid variable on named forms,
    but was able to style ng-touched fields that are required and invalid
    with red borders.
    
    If you search for  credit-card-form  in checkout.html, you'll get 2
    hits, the first is the 
*/

var $ = require("jquery");

module.exports = function($scope, $timeout, ShopSrvc) {
    
    var billingState = "";

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();

        /*
            Listen for the blur event on the billing state field to
            update the tax immediately when the user changes the state
        */
        $("#billingState").blur(function() {
            if(billingState == $scope.billing.state) {
                return;
            } else {
                billingState = $scope.billing.state;
            }
            calculateTaxAmount($scope.billing.state);
        })
    })


    /*
        Billing / Shipping info vars
    */
    $scope.billing = {};

    $scope.shipping = {};

    $scope.diffShippingAddress = false;



    /*
        "Order Summary" section vars
    */
    $scope.itemsInCart = ShopSrvc.getItemsInCart();
    $scope.cartTotal = ShopSrvc.getCartTotal();
    $scope.taxAmount = 0;
    
    calculateShippingRate();

    /* 
        This $timeout is so I can keep a $scope.$apply inside
        this function for future async updates.
        
        Without the $timeout I get a '$digest in progress' error when
        I want to run these as soon as the controller gets loaded.

        I'm not sure if it's bad practice because I only found conflicting
        things online about $watch and $apply -- use it, don't use it,
        then what CAN I use?!?!?! ridiculous. This at least works
    */
    $timeout(function() {
        calculateGrandTotal();
    })


    // Credit card form obj
    $scope.creditCard = {
        expMonth: "Month",
        expYear: "Year"
    };


    /*
        Methods
    */
    $scope.toggleDiffShippingAddress = function() {
        $scope.diffShippingAddress = !$scope.diffShippingAddress;
    }

    /*
        Call when the billing state field blurs
        Need to know which state to see if sales tax applies for
        in-state purchases (let's just say our HQ is in CA).
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

    // Just returns a hard-coded rate.
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

    $scope.submitCCPayment = function() {
        alert("Payment submitted. See you're getting smarter already!");
    }
}
