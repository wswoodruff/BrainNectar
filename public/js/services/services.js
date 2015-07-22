module.exports = angular.module('app.services', [])

.factory('ResizeSrvc', require('./resizeSrvc'))

.factory('SalesFeedSrvc', require('./salesFeedSrvc'))

.factory('ShopSrvc', require('./shopSrvc'))

.factory('CartSrvc', require('./cartSrvc'))
