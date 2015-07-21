/*
    This module assumes that there will be at least
    one thing being sold in the shop
*/

module.exports = function($scope, ShopItems) {

    $scope.shopItems = ShopItems.getShopItems();

    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
    })



}
