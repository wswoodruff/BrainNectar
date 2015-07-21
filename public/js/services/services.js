module.exports = angular.module('app.services', [])

.factory('MobileWidthWatch', require('./mobileWidthWatch'))

.factory('SalesFeed', require('./salesFeed'))

.factory('ShopItems', require('./shopItems'))

.factory('Cart', require('./cartManager'))
