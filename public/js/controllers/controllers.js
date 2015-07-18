
module.exports = angular.module('app.controllers', [])

.controller('MainCtrl', require('./mainCtrl'))

.controller('MainContentCtrl', require('./mainContentCtrl'))

.controller('SidebarCtrl', require('./sidebarCtrl'))

.controller('HomeCtrl', require('./homeCtrl'));
