/*
    Keeps all controllers in their own modules
*/

module.exports = angular.module('app.controllers', [])

.controller('MainCtrl', require('./mainCtrl'))

.controller('NavCtrl', require('./navCtrl'))

.controller('HeaderCtrl', require('./headerCtrl'))

.controller('PageCtrl', require('./pageCtrl'))

.controller('SidebarCtrl', require('./sidebarCtrl'))

.controller('HomeCtrl', require('./homeCtrl'))

.controller('ShopCtrl', require('./shopCtrl'))

.controller('CartCtrl', require('./cartCtrl'))

.controller('CheckoutCtrl', require('./checkoutCtrl'))

.controller('FooterCtrl', require('./footerCtrl'))
